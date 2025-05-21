import React from "react";
import ProgramCard from "./ProgramCard";
const Programs = () => {
  const programs = [{
    id: 1,
    title: "Beginner Group",
    description: "Introduction to table tennis basics with fun games and activities to develop coordination and basic skills.",
    age: "",
    level: "Beginner Under 11"
  }, {
    id: 2,
    title: "Intermediate Group",
    description: "Focus on developing proper technique, footwork, and introducing tactical play for improving players.",
    age: "",
    level: "Intermediate Open"
  }, {
    id: 3,
    title: "Advanced Group",
    description: "Intensive training for competitive players focusing on advanced techniques, match strategy, and tournament preparation.",
    age: "",
    level: "Elite Squad"
  }, {
    id: 4,
    title: "One 2 One Coaching",
    description: "Elite coaching for tournament players aiming to compete at regional and national levels.",
    age: "",
    level: "Elite"
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Coaching Programs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the perfect skill level</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(program => <ProgramCard key={program.id} title={program.title} description={program.description} age={program.age} level={program.level} />)}
        </div>
      </div>
    </section>;
};
export default Programs;