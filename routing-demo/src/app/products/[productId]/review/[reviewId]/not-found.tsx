"use client";
import React from "react";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="text-3xl font-bold">Not Found!</div>
      <div className="text-sm text-gray-500">
        Review {reviewId} Not Found for the Product {productId}!
      </div>
    </div>
  );
};

export default NotFound;
