import React from "react";
import memesData from "../memesData.js";
import "../Styles/Meme.css";

export default function Meme() {
  let url;

  // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randomNumber].url;

    setMemeImage(url);
  }

  return (
    <main>
      <p>{url}</p>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} alt="" className="image--container" />
    </main>
  );
}
