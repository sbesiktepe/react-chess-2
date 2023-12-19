import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";

const chessGame = new Chess();

const subjectBehaviour = new BehaviorSubject({
  chess: chessGame.board(),
});

export default subjectBehaviour;

export const move = (from, to) => {
  const moveOperation = chessGame.move({ from, to });

  if (moveOperation) {
    updateGame();
  }
};

const updateGame = () => {
  const isGameOver = chessGame.isCheckmate();
  console.log(isGameOver);
  subjectBehaviour.next({
    chess: chessGame.board(),
    isGameOver,
    result: isGameOver ? getGameResult() : null,
  });
};

const getGameResult = () => {
  if (chessGame.isCheckmate()) {
    const winner = chessGame.turn() === "w" ? "Black" : "White";
    return `ŞAH MAT - Kazanan : ${winner}`;
  } else if (chessGame.isDraw()) {
    let reason = "50 Hamle Kuralı";
    if (chessGame.isStalemate()) {
      reason = "Çıkmaz Döngü";
    } else if (chessGame.isThreefoldRepetition()) {
      reason = "Tekrarlama";
    } else if (chessGame.isInsufficientMaterial()) {
      reason = "Yetersiz Malzeme";
    }
    return reason;
  }
};
