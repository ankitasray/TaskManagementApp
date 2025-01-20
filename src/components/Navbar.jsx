import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link to="/" className="text-white font-bold text-2xl">
              TaskManager
            </Link>
          </div>
          <div className="space-x-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/completed" className="text-white hover:text-gray-300">
              Completed Tasks
            </Link>
            <Link to="/add-task" className="text-white hover:text-gray-300">
              Add Task
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
