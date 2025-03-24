import React from "react";

const productDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return (
    <div className="felx justify-center items-center text-3xl font-bold m-8">
      Details about product {productId}
    </div>
  );
};

export default productDetails;
