import React from 'react';

const AboutPage = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to our platform! We are committed to providing top-notch services and
          resources to help you achieve your goals. Our team is dedicated to ensuring your
          experience is seamless and enjoyable.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          With years of expertise in the industry, we strive to innovate and bring the
          best solutions to our users. We value feedback and are always looking to improve.
        </p>
        <p className="text-gray-600 text-lg">
          Thank you for choosing us. Together, let's build something amazing!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
