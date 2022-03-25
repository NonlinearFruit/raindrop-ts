import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

type SquareProps = {
  value: string,
  onClick(): void,
}

type BoardProps = {
  value: string[],
  xIsNext: boolean
}

function Square(props: SquareProps) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
  );
}

class Board extends React.Component<{}, BoardProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: Array(9).fill(""),
      xIsNext: true
    };
  }

  handleClick(i: number) {
    const squares = this.state.value.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({value: squares, xIsNext: !this.state.xIsNext});
  }

  renderSquare(i: number) {
    return <Square value={this.state.value[i]} onClick={() => this.handleClick(i)}/>;
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}

export default App;
