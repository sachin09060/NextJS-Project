import React from "react";
import LineChat from "./line-chart";

const Dashboard = () => {
  return (
    <div className="text-3xl font-bold flex flex-col justify-center items-center w-full h-screen">
      Dashboard Page!
      <LineChat />
    </div>
  );
};

export default Dashboard;
