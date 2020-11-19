/*
JSX 자바스크립트 확장 문법.
React element를 생성 한다.
JSX 중괄호 안에는 모든 javaScript 표현식을 넣을 수 있다.

JSX도 표현식입니다
컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 
JavaScript 객체로 인식됩니다.
즉, JSX를 if 구문 및 for loop 안에 사용하고, 
변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환할 수 있습니다.
*/

import React from "react";
import { Board, HistoryBtn } from "./components/index";
import { v4 as uuidv4 } from "uuid";
import calculateWinner from "./helper/calculateWinner";
import "./css/app.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      isBold: false,
    };
  }

  handleClick = (i) => {
    //return 에 this.renderSquare에서 i값을 받고 onclick에 i값을 매개변수로 handleClick에게 전해줌
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // immutable
    if (squares[i] || calculateWinner(squares)) return; //이미 칸이 차있으면 return을 통해 함수를 종료시킨다.
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: [...history, { squares }],
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo(step) {
    if (!this.state.isBold) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        isBold: true,
      });
    } else {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        isBold: false,
      });
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status = "Let's go get them!! first user is X";
    if (winner) {
      status = `Winner : ` + winner;
    } else {
      status = `Next player : ` + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        {console.log("Game Render")}
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status} </div>
          <ol>
            {history.map((step, move) => {
              const des = move ? `Go to move #` + move : `Go to game start`;
              return (
                <HistoryBtn
                  onClick={() => this.jumpTo(move)}
                  isBold={this.state.isBold}
                  key={uuidv4()}
                  des={des}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Game;
