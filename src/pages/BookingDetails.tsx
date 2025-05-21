
import React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBooking } from "@/contexts/BookingContext";

const formSchema = z.object({
  customerName: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  playerName: z.string().min(2, {
    message: "Player name must be at least 2 characters."
  })
});

const BookingDetails = () => {
  const navigate = useNavigate();
  const {
    bookingType,
    customerName,
    setCustomerName,
    playerName,
    setPlayerName,
    email,
    setEmail
  } = useBooking();

  // Redirect if booking type is not set
  React.useEffect(() => {
    if (bookingType === null) {
      navigate("/beginner");
      toast({
        title: "No booking selected",
        description: "Please select your booking option first",
        variant: "destructive"
      });
    }
  }, [bookingType, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerName: customerName,
      playerName: playerName
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCustomerName(values.customerName);
    setPlayerName(values.playerName);
    
    // Also update email in context to prevent validation errors on summary page
    setEmail("no-email@example.com"); // Set a default value since we removed the email field
    
    navigate("/summary");
  }

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Your Details</h1>
        
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="customerName" render={({
              field
            }) => <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <FormField control={form.control} name="playerName" render={({
              field
            }) => <FormItem>
                    <FormLabel>Player's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter player's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              
              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>;
};

export default BookingDetails;
