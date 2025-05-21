
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBooking } from "@/contexts/BookingContext";

const BookingSummary = () => {
  const navigate = useNavigate();
  const {
    selectedDates,
    bookingType,
    selectedMonth,
    totalCost,
    customerName,
    playerName,
    email,
    discountCode,
    setDiscountCode,
  } = useBooking();

  const [discountedTotal, setDiscountedTotal] = useState(totalCost);
  const [localDiscountCode, setLocalDiscountCode] = useState(discountCode);

  // Redirect if no booking type is selected
  useEffect(() => {
    if (bookingType === null) {
      navigate("/beginner");
      toast({
        title: "No booking selected",
        description: "Please select your booking option first",
        variant: "destructive",
      });
    }
  }, [bookingType, navigate]);

  // Redirect if customer details are not filled
  useEffect(() => {
    if (!customerName || !playerName) {
      navigate("/details");
      toast({
        title: "Missing details",
        description: "Please fill in your details first",
        variant: "destructive",
      });
    }
  }, [customerName, playerName, navigate]);

  useEffect(() => {
    if (discountCode === "SIB") {
      setDiscountedTotal(totalCost * 0.5);
    } else {
      setDiscountedTotal(totalCost);
    }
  }, [discountCode, totalCost]);

  const applyDiscount = () => {
    if (localDiscountCode === "SIB") {
      setDiscountCode(localDiscountCode);
      toast({
        title: "Discount applied",
        description: "50% sibling discount has been applied",
      });
    } else if (localDiscountCode) {
      toast({
        title: "Invalid discount code",
        description: "Please enter a valid discount code",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Payment processing will be implemented in the future.",
    });
  };

  const getBookingTypeText = () => {
    switch (bookingType) {
      case "month3":
        return `Monthly booking (3 sessions per week) for ${selectedMonth}`;
      case "month1":
        return `Monthly booking (1 session per week) for ${selectedMonth}`;
      case "single":
        return "Individual sessions";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Booking Summary</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Your Booking</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Booking Details</h3>
              <p className="mb-1"><strong>Booking Type:</strong> {getBookingTypeText()}</p>
              
              {bookingType === "single" && selectedDates.length > 0 && (
                <div className="mt-3">
                  <p className="font-medium">Selected Dates:</p>
                  <ul className="mt-1 ml-5 list-disc">
                    {selectedDates.map((date, index) => (
                      <li key={index} className="text-sm">
                        {format(date, "EEEE, MMMM do, yyyy")}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Personal Details</h3>
              <p className="mb-1"><strong>Your Name:</strong> {customerName}</p>
              <p className="mb-1"><strong>Player's Name:</strong> {playerName}</p>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-grow">
                <label htmlFor="discountCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <Input
                    id="discountCode"
                    value={localDiscountCode}
                    onChange={(e) => setLocalDiscountCode(e.target.value)}
                    placeholder="Enter code: SIB for sibling discount"
                    className="max-w-xs"
                    disabled={discountCode === "SIB"}
                  />
                  <Button 
                    onClick={applyDiscount} 
                    variant="outline"
                    disabled={discountCode === "SIB"}
                  >
                    Apply
                  </Button>
                </div>
                {discountCode === "SIB" && (
                  <p className="text-green-600 text-sm mt-1">50% sibling discount applied!</p>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md md:min-w-[200px]">
                <p className="text-gray-700">Original Price: <span className="font-semibold">£{totalCost.toFixed(2)}</span></p>
                
                {discountCode === "SIB" && (
                  <p className="text-green-600">Discount: <span className="font-semibold">-£{(totalCost * 0.5).toFixed(2)}</span></p>
                )}
                
                <p className="text-lg font-bold mt-1">
                  Total: £{discountedTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => navigate("/beginner")}
          >
            Back
          </Button>
          <Button 
            onClick={handleCheckout}
            className="bg-green-600 hover:bg-green-700"
          >
            Checkout
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingSummary;
