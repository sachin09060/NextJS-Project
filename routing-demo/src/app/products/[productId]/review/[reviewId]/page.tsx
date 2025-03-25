import React from "react";
import { notFound } from "next/navigation";

const reviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="felx justify-center items-center text-3xl font-bold m-8">
      Review {reviewId} for Product {productId}
    </div>
  );
};

export default reviewDetails;
