import Square from "./Square";
import SquareBoard from "./SquareBoard";

const Board = ({ board }) => {
  const colorCntrl = (i) => {
    const x = i % 8;

    const y = Math.abs(Math.floor(i / 8) - 7);

    return (x + y) % 2 === 0;
  };

  const positionCntrl = (i) => {
    const x = i % 8;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    const y = Math.abs(Math.floor(i / 8) - 7);
    return `${letters}${y + 1}`; //a8,b5,...
  };

  const renderedBoard = board.flat().map((chessPiece, index) => {
    return (
      <Square
        colorValue={colorCntrl(index)}
        className="border border-2 border-red-400"
        positionCntrl={positionCntrl(index)}
      >
        {chessPiece && (
          <SquareBoard
            type={chessPiece.type}
            color={chessPiece.color}
            positionCntrl={positionCntrl(index)}
          />
        )}
      </Square>
    );
  });

  return (
    <div className="w-[640px] h-[640px] bg-red-400 flex flex-wrap ">
      {renderedBoard}
    </div>
  );
};

export default Board;
