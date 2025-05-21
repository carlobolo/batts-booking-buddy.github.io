
import React from "react";
import Navbar from "@/components/Navbar";
import PasswordProtected from "@/components/PasswordProtected";
import BookingTable from "@/components/BookingTable";
import Footer from "@/components/Footer";

// Sample data for demonstration
const underElevenBookings = [
  { id: "1", name: "Dave Brian Williams", booked: "June" },
  { id: "2", name: "Mary Collett Peters", booked: "25/06/2025" },
  { id: "3", name: "Mary Collett Peters", booked: "26/06/2025" },
  { id: "4", name: "Mary Collett Peters", booked: "27/06/2025" },
];

const openJuniorBookings = [
  { id: "5", name: "Samual edwards", booked: "July" },
];

const squadBookings: { id: string; name: string; booked: string }[] = [];

const BookingList: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PasswordProtected 
          password="2025"
          message="This page is restricted for management only please enter your password"
        >
          <h1 className="text-3xl font-bold text-center mb-10">Booking List</h1>
          
          <BookingTable title="Under Eleven" bookings={underElevenBookings} />
          <BookingTable title="Open Junior" bookings={openJuniorBookings} />
          <BookingTable title="Squad" bookings={squadBookings} />
        </PasswordProtected>
      </main>
      <Footer />
    </div>
  );
};

export default BookingList;
