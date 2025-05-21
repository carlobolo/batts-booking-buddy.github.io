
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import CoachingInfo from "@/components/CoachingInfo";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Programs />
        <CoachingInfo />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
