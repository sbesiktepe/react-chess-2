import { useEffect, useState } from "react";
import subjectBehaviour from "./components/Game";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    const subscribe = subjectBehaviour.subscribe((sub) => {
      setIsGameOver(sub.isGameOver);
      setResult(sub.result);
      setBoard(sub.chess);
    });
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen flex flex-col justify-center items-center relative ">
        <div className="absolute top-1/2 right-auto font-extrabold text-3xl text-black">
          {isGameOver && <div>Game Over</div>}
          {isGameOver && <div>{result}</div>}
        </div>
        <Board board={board} />
      </div>
    </DndProvider>
  );
}

export default App;
