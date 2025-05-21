
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BookingCTA = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="p-6 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Table Tennis Skills?</h2>
          <p className="text-gray-600 mb-6">
            Book a session now and start your journey to becoming a better player!
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Book Your Session Today
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BookingCTA;
