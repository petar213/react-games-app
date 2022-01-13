import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';

import step0 from "../../assets/hangman/hangman_0.jpg";
import step1 from "../../assets/hangman/hangman_1.jpg";
import step2 from "../../assets/hangman/hangman_2.jpg";
import step3 from "../../assets/hangman/hangman_3.jpg";
import step4 from "../../assets/hangman/hangman_4.jpg";
import step5 from "../../assets/hangman/hangman_5.jpg";
import step6 from "../../assets/hangman/hangman_6.jpg";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      selectedLetters: new Set([]),
      answer: randomWord()
    }
  }

  handleGuess = event => {
    let letter = event.target.value;
    this.setState(state => ({
      selectedLetters: state.selectedLetters.add(letter),
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.selectedLetters.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-dark'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.selectedLetters.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      selectedLetters: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }

    return (
      <div className="Hangman container">
        <h1 className='text-center'>Hangman</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          <p>Guess the Programming Language:</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className='btn btn-danger' onClick={this.resetButton}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Hangman;
