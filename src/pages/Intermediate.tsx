
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format, isMonday, isWednesday, isFriday, addMonths, isBefore, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBooking } from "@/contexts/BookingContext";
import { toast } from "@/components/ui/use-toast";

const Intermediate = () => {
  const navigate = useNavigate();
  const {
    selectedDates,
    setSelectedDates,
    bookingType,
    setBookingType,
    selectedMonth,
    setSelectedMonth,
    setTotalCost
  } = useBooking();

  const [showCalendar, setShowCalendar] = useState(false);

  // Get current and next two months
  const today = new Date();
  const availableMonths = [
    { name: format(today, 'MMMM'), value: format(today, 'MMMM') },
    { name: format(addMonths(today, 1), 'MMMM'), value: format(addMonths(today, 1), 'MMMM') },
    { name: format(addMonths(today, 2), 'MMMM'), value: format(addMonths(today, 2), 'MMMM') }
  ];

  // Reset selections when page loads
  useEffect(() => {
    setSelectedDates([]);
    setBookingType(null);
    setSelectedMonth(null);
    setTotalCost(0);
  }, [setSelectedDates, setBookingType, setSelectedMonth, setTotalCost]);

  const isDateSelectable = (date: Date) => {
    // Check if date is today or in the future
    const isNotPastDate = !isBefore(date, startOfDay(new Date()));
    // Check if the date is Monday, Wednesday, or Friday
    const isAvailableDay = isMonday(date) || isWednesday(date) || isFriday(date);
    
    return isNotPastDate && isAvailableDay;
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    if (!date) return;
    if (bookingType !== "single") {
      setBookingType("single");
      setSelectedMonth(null);
    }

    // Toggle date selection
    if (selectedDates.some(selectedDate => selectedDate.getDate() === date.getDate() && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear())) {
      setSelectedDates(selectedDates.filter(selectedDate => !(selectedDate.getDate() === date.getDate() && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear())));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleMonthSelect = (value: string, sessionsPerWeek: 1 | 3) => {
    // If selecting the same option that's currently selected, unselect it
    if (bookingType === (sessionsPerWeek === 3 ? "month3" : "month1") && selectedMonth === value) {
      setSelectedMonth(null);
      setBookingType(null);
      setTotalCost(0);
      return;
    }
    
    setSelectedMonth(value);
    setSelectedDates([]);
    setBookingType(sessionsPerWeek === 3 ? "month3" : "month1");
    setTotalCost(sessionsPerWeek === 3 ? 40 : 25);
  };

  const handleNext = () => {
    if (bookingType === "single" && selectedDates.length === 0) {
      toast({
        title: "No dates selected",
        description: "Please select at least one date to book.",
        variant: "destructive"
      });
      return;
    }
    if (bookingType === null) {
      toast({
        title: "No booking option selected",
        description: "Please select either monthly booking or individual sessions.",
        variant: "destructive"
      });
      return;
    }
    if (bookingType === "single") {
      setTotalCost(selectedDates.length * 7.5);
    }
    navigate("/details");
  };

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Book Intermediate Group Sessions
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Options</h2>
          
          <div className="space-y-6">
            <div className="p-4 border rounded-md bg-blue-50">
              <h3 className="font-medium mb-2">Book sessions for the whole month (3 sessions per week)</h3>
              <p className="mb-3">Will cost £40.00 per month (best option).</p>
              <Select 
                onValueChange={value => handleMonthSelect(value, 3)} 
                value={bookingType === "month3" ? selectedMonth || undefined : undefined}
                disabled={bookingType === "month1" || (bookingType === "single" && selectedDates.length > 0)}
              >
                <SelectTrigger className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {availableMonths.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 border rounded-md bg-blue-50">
              <h3 className="font-medium mb-2">Book sessions for the whole month (1 session per week)</h3>
              <p className="mb-3">Will cost £25.00 per month.</p>
              <Select 
                onValueChange={value => handleMonthSelect(value, 1)} 
                value={bookingType === "month1" ? selectedMonth || undefined : undefined}
                disabled={bookingType === "month3" || (bookingType === "single" && selectedDates.length > 0)}
              >
                <SelectTrigger className="w-full md:w-[300px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {availableMonths.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">Book single sessions</h3>
              <p className="mb-3">Will cost £7.50 each.</p>
              <p className="mb-4 text-sm text-gray-600">Only Mondays, Wednesdays, and Fridays are available.</p>
              
              {(bookingType === null || bookingType === "single") && (
                <div className="mb-4">
                  {!showCalendar ? (
                    <Button 
                      onClick={() => setShowCalendar(true)} 
                      className="mb-4"
                      disabled={bookingType === "month1" || bookingType === "month3"}
                    >
                      Show calendar to book
                    </Button>
                  ) : (
                    <Calendar 
                      mode="multiple" 
                      selected={selectedDates} 
                      onSelect={dates => {
                        if (dates && dates.length > 0) {
                          setBookingType("single");
                          setSelectedMonth(null);
                          setSelectedDates(dates);
                        } else {
                          setSelectedDates([]);
                        }
                      }} 
                      disabled={date => !isDateSelectable(date)} 
                      className={bookingType === "month1" || bookingType === "month3" ? "opacity-50 pointer-events-none" : ""} 
                    />
                  )}
                </div>
              )}
              
              {bookingType === "single" && selectedDates.length > 0 && <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p><strong>Selected dates:</strong></p>
                  <ul className="mt-2 space-y-1">
                    {selectedDates.map((date, index) => <li key={index}>{format(date, "EEEE, MMMM do, yyyy")}</li>)}
                  </ul>
                  <p className="mt-3 text-lg font-semibold">
                    Total: £{(selectedDates.length * 7.50).toFixed(2)}
                  </p>
                </div>}
            </div>
          </div>

          <div className="mt-6 p-4 border-t border-dashed border-gray-300 pt-4">
            <p className="text-sm italic text-gray-700">
              Note: If you are booking for a sibling, add the code: <strong>SIB</strong> before checkout to receive 50% discount.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleNext} className="px-8">
            Next
          </Button>
        </div>
      </main>
      <Footer />
    </div>;
};

export default Intermediate;
