import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="text-3xl font-bold">Not Found!</div>
      <div className="text-sm text-gray-500">
        Could not find requested resource!
      </div>
    </div>
  );
};

export default NotFound;
