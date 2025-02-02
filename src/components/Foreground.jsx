import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sed!",
      status: true,
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, sed!",
      status: false,
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full z-[3] flex gap-5 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} referance={ref} />
      ))}
    </div>
  );
}

export default Foreground;
