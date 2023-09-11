"use client";

import React, { useState } from "react";

export default function Content() {
  const content = [
    {
      id: 1,
      client: "Ebay",
      title: "Ebay",
      image: "/ebay.png",
      link: "https://player.vimeo.com/video/786295523?h=aa62dcb7c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 2,
      client: "NatIonwIde",
      title: "Nationwide theme by H.E.R.",
      info: "Unique rendition of the Nationwide theme by H.E.R.",
      image: "/Nationwide.png",
      link: "https://player.vimeo.com/video/760586337?h=3e5f49c708&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 3,
      client: "VoLkswagon",
      title: "VoLkswagon Sheep",
      info: "We did x, y and z",
      image: "/Sheep.png",
      link: "https://player.vimeo.com/video/760586377?h=f76779a6a5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 4,
      client: "Samsung",
      title: "Samsung Galaxy Z Fold3 5G",
      info: "We did x, y and z",
      image: "/cats.png",
      link: "https://player.vimeo.com/video/760586356?h=ca722a93c1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 5,
      client: "BudweIser",
      title: "BudweIser",
      info: "We did x, y and z",
      image: "/bud.png",
      link: "https://player.vimeo.com/video/760586257?h=c4edb78d87&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 6,
      client: "T-MobILe",
      title: "T-MobILe",
      info: "I feel pretty",
      image: "/tmobile.png",
      link: "https://player.vimeo.com/video/760586368?h=8e97ee49c9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-3 ">
        {content.map((item) => (
          <div
            className="group relative flex flex-col items-center col-span-1 w-[100%] h-[100%]" // Adjust the width and height as needed
            key={item.id}
          >
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="flex flex-col items-center justify-center bg-brandBlue bg-opacity-50 p-2 absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center text-white">{item.title}</div>
                <div className="text-center text-white">{item.client}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
