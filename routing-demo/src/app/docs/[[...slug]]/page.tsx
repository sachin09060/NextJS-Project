import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div className="felx justify-center items-center text-3xl font-bold m-8">
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div className="felx justify-center items-center text-3xl font-bold m-8">
        Viewing docs for feature {slug[0]}
      </div>
    );
  }
  return (
    <div>
      {/* This page is Example For Catch All Segments */}
      Docs home page
    </div>
  );
};

export default Docs;
