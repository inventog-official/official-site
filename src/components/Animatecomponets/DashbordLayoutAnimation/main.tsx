import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ResizeOnScroll: React.FC = () => {
  // useScroll provides scrollYProgress (normalized between 0 and 1)
  const { scrollYProgress } = useScroll();

  // Map scroll progress to width and height values
  const width = useTransform(scrollYProgress, [0, 1], [3024, 300]); // Desktop to phone width
  const height = useTransform(scrollYProgress, [0, 1], [768, 540]); // Desktop to phone height

  return (
    <div className="h-[400vh]   bg-gray-100">
      <div className="sticky top-0 flex justify-center items-center h-screen">
        <motion.div
          style={{
            width,
            height,
          }}
          className="bg-blue-500 h-full rounded-lg shadow-lg flex justify-center items-center text-white text-2xl font-bold overflow-hidden"
        >
          {/* <motion.img
            src="https://via.placeholder.com/1920x1080" // Replace with your image URL
            alt="Resizing Background"
            className="relative top-0 left-0 w-full h-full object-cover"
            style={{
              width,
              height,
            }}
          /> */}
        <div className="flex flex-col lg:flex-row relative z-10 w-full bg-gray-900 text-gray-200">
  {/* Sidebar */}
  <div className="bg-gray-800 text-white p-6 w-full lg:w-1/4 flex-shrink-0">
    <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
    <ul>
      <li className="mb-4 hover:bg-gray-700 p-2 rounded">
        <a href="#" className="text-lg">Home</a>
      </li>
      <li className="mb-4 hover:bg-gray-700 p-2 rounded">
        <a href="#" className="text-lg">Analytics</a>
      </li>
      <li className="mb-4 hover:bg-gray-700 p-2 rounded">
        <a href="#" className="text-lg">Settings</a>
      </li>
      <li className="mb-4 hover:bg-gray-700 p-2 rounded">
        <a href="#" className="text-lg">Profile</a>
      </li>
    </ul>
  </div>

  {/* Main Content Area */}
  <div className="flex-1 p-6">
    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Log out</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500">Profile</button>
      </div>
    </div>

    {/* Dashboard Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Total Users</h3>
        <p className="text-3xl font-bold">1,245</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-400">Active Sessions</h3>
        <p className="text-3xl font-bold">432</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-red-400">New Signups</h3>
        <p className="text-3xl font-bold">56</p>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-teal-400">Recent Activity</h3>
      <ul>
        <li className="border-b border-gray-700 py-3">
          <p className="text-lg font-semibold">New User Registration</p>
          <p className="text-gray-400">John Doe just signed up.</p>
        </li>
        <li className="border-b border-gray-700 py-3">
          <p className="text-lg font-semibold">System Update</p>
          <p className="text-gray-400">The system was updated successfully.</p>
        </li>
        <li className="border-b border-gray-700 py-3">
          <p className="text-lg font-semibold">User  Login</p>
          <p className="text-gray-400">Jane Smith logged in.</p>
        </li>
      </ul>
    </div>
  </div>
</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResizeOnScroll;
