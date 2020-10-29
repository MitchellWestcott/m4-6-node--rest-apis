const { words } = require("../data/words");

// write your handlers here...

const hangmanWord = (req, res) => {
  const id = req.params.id;
  const word = words.filter((word) => id === word.id);
  if (word) {
    res.status(200).json({
      status: 200,
      word: word,
    });
  }
};

const randomWord = (req, res) => {
  const randomNum = Math.floor(Math.random() * words.length);
  const word = words[randomNum];
  res.status(200).json({
    status: 200,
    word: [word.id, word.letterCount],
  });
};

const letterGuess = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter;
  const guess = words.filter((word) => id === word.id);
  const word = guess[0].word;
  const wordArray = word.split("");
  let results = [];
  wordArray.forEach((userGuess) => {
    if (letter === userGuess) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  res.status(200).json({
    status: 200,
    message: results,
  });
};

module.exports = { hangmanWord, randomWord, letterGuess };
