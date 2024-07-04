import React from "react";
import Sidebar from "../components/Sidebar";

const Analytics = () => {
  return (
    <div className="flex">
      <div className="w-[100px] bg-gray-300 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-grow p-5">
        <h1 className="text-2xl font-bold">Analytics</h1>
      </div>
    </div>
  );
};

export default Analytics;
