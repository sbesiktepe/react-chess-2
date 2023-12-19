import React from "react";
import { useDrop } from "react-dnd";
import { move } from "./Game";

const Square = ({ className, colorValue, children, positionCntrl }) => {
  const [, drop] = useDrop({
    accept: "chess",
    drop: (item) => {
      const [fromPosition] = item.id.split("_");
      move(fromPosition, positionCntrl);
    },
  });

  return (
    <div
      ref={drop}
      className={`w-[80px] h-[80px] flex items-center justify-center cursor-grab  ${className} ${
        colorValue ? "bg-green-700" : "bg-green-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Square;
