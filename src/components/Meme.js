import React from "react";
import { changeValueBot, changeValueTop } from "../changeValue";
import saveToLocal from "../saveImage";
import resetTxt from "../reset";
import { ArrowClockwise } from "react-bootstrap-icons";

export default function Meme() {
  const [result, setTheResult] = React.useState(
    "https://www.pngall.com/wp-content/uploads/2016/03/Troll-Face-Meme-PNG.png"
  );
  function handleClick() {
    fetch(" https://api.imgflip.com/get_memes")
      .then((result) => result.json())
      .then((data) => {
        const memesArray = data.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const imgUrl = memesArray[randomNumber].url;
        setTheResult(imgUrl);
      });
  }
  function showRandomMeme() {
    resetTxt();

    fetch("https://meme-api.herokuapp.com/gimme")
      .then((result) => result.json())
      .then((data) => {
        let randomMeme = data.url;
        setTheResult(randomMeme);
      });
  }

  return (
    <main className="main-main">
      <div className="meme-form">
        <button onClick={handleClick} className="form-btn">
          Get a new random image for your Meme &#9978;
        </button>

        <div className="input-container">
          <input
            onChange={changeValueTop}
            type="text"
            className="input-field input-left"
            placeholder="Upper text"
          ></input>
          <input
            onChange={changeValueBot}
            type="text"
            className="input-field input-right"
            placeholder="Lower text"
          ></input>
          <button className="form-btn arrow-btn" onClick={resetTxt}>
            <ArrowClockwise className="" size={30} />
            Reset text
          </button>
        </div>
        <button className="form-btn" onClick={showRandomMeme}>
          Show a random Meme
        </button>
        <div className="share-btn">
          <button onClick={saveToLocal} className="save-btn isHidden">
            Save 💾
          </button>
        </div>
      </div>
      <div className="meme-image-container">
        <div className="upper-text-content isHidden"></div>
        <img className="meme-random-image" alt="error" src={result}></img>
        <div className="lower-text-content isHidden"></div>
      </div>
    </main>
  );
}
