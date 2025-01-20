import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-900">
            Your trusted partner for <span className="text-blue-700">efficient task management</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Stay organized, productive, and always on top of your priorities with our modern task management system.
          </p>
          <div className="flex gap-4">
            {/* <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-lg text-white font-semibold py-3 px-5 rounded">
              Add New Task
            </button> */}
            <button className="text-blue-600 font-semibold underline hover:text-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
