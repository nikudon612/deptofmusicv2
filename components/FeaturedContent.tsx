import React from "react";

const imageStyle = {
  background: `url("/Nationwide.png")`,
  backgroundSize: "cover", // This will make the image cover the entire container
  backgroundPosition: "center", // Center the image horizontally and vertically
  width: "100%",
  height: "100%",
  maxWidth: "50%", // Set a maximum width of 50% to fit within the left half
};

export default function FeaturedContent() {
  return (
    <div className="w-screen h-screen bg-brandBlue flex">
      <div
        className="w-1/2 h-full flex items-center justify-center"
        style={imageStyle}
      ></div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="text-6xl font-bold">Department of Music</div>
      </div>
    </div>
  );
}
