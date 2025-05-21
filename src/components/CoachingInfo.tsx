import React from "react";
const CoachingInfo = () => {
  return <section id="about-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Junior Coaching</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Batts, we believe that every child should have the opportunity to enjoy table tennis and develop their skills in a fun, safe, and supportive environment.
              </p>
              <p>
                Our junior coaching program is designed to accommodate players of all abilities, from complete beginners to advanced players. Sessions are delivered by qualified and experienced coaches who are passionate about developing young talent.
              </p>
              <p>
                All sessions take place in our purpose-built facility featuring professional equipment and playing conditions. We focus not just on technical skills, but also on developing confidence, coordination, and a lifelong love for the sport.
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Professional qualified coaches</li>
                <li>Small group sizes for personalized attention</li>
                <li>Structured progression pathways</li>
                <li>Regular feedback and progress reports</li>
                <li>Opportunities to participate in local competitions</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Coaching Schedule</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <h4 className="text-lg font-medium text-blue-600">Beginner Groups</h4>
                <p className="text-gray-700">Tuesdays & Thursdays: 4:00 PM - 5:00 PM</p>
                <p className="text-gray-700">Saturdays: 9:00 AM - 10:00 AM</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="text-lg font-medium text-blue-600">Intermediate Groups</h4>
                <p className="text-gray-700">Tuesdays & Thursdays: 5:00 PM - 6:30 PM</p>
                <p className="text-gray-700">Saturdays: 10:15 AM - 11:45 AM</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="text-lg font-medium text-blue-600">Advanced Groups</h4>
                <p className="text-gray-700">Monday Wednesday: 6:00 PM - 8:00 PM
Friday: 5:30PM - 7:30PM</p>
                <p className="text-gray-700">Saturdays: 12:00 PM - 2:00 PM</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-600">One 2 One Coaching</h4>
                <p className="text-gray-700">Mondays, Wednesdays & Fridays: 6:00 PM - 8:00 PM</p>
                <p className="text-gray-700">Sundays: 10:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoachingInfo;