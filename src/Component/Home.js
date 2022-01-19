import React, { useState } from "react";

const Home = () => {
  const [attempts, setAttempts] = useState(1);
  //   const trial = [1, 2, 3];
  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);

  const guessChecking = (event) => {
    let guess = event.target.value;
    console.log(guess);
    if (guess === rand) {
      alert("You Won");
    }
    console.log("The reamaining Attempts is");
  };

  const attemptionLimit = () => {
    setAttempts(attempts + 1);

    if (attempts >= 3) {
      alert("Your Failed:(");

      console.log(rand);
    }
  };

  return (
    <div className="addingNumber">
      <h1>Enter Your Guess</h1>
      <input type="number" name="Guess a number" onChange={guessChecking} />
      <br></br>
      <br></br>
      <button className="button" onClick={attemptionLimit}>
        {" "}
        Let Start{" "}
      </button>
    </div>
  );
};

export default Home;
