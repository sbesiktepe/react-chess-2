import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

const SquareBoard = ({ color, type, positionCntrl }) => {
  const image = require(`../../public/assets/${type}_${color}.png`);
  const [, drag, preview] = useDrag({
    type: "chess",
    item: { id: `${positionCntrl}_${type}_${color}` },
    collect: (monitor) => {
      return { isdragging: !!monitor.isDragging };
    },
  });

  return (
    <>
      <DragPreviewImage src={image} connect={preview} />
      <img ref={drag} src={image} alt="" />
    </>
  );
};

export default SquareBoard;
