import React from "react";
import "../index.css";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header-img"
        src="https://www.pngall.com/wp-content/uploads/2016/03/Troll-Face-Meme-PNG.png"
        alt="Could not load resource"
      />
      <span className="header-title">Meme Generator</span>
    </header>
  );
}
