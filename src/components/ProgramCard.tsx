
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProgramCardProps = {
  title: string;
  description: string;
  age: string;
  level: string;
};

const ProgramCard = ({ title, description, age, level }: ProgramCardProps) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    
    if (title === "Beginner Group") {
      navigate("/beginner");
    } else if (title === "Intermediate Group") {
      navigate("/intermediate");
    } else if (title === "Advanced Group") {
      navigate("/advanced");
    } else {
      // For other programs
      console.log(`Booking for ${title}`);
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-blue-600">{title}</CardTitle>
        <CardDescription className="text-sm font-medium">
          <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded">
            Level: {level}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleBookNow}>Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
