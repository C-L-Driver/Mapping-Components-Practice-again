import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia.js";

console.log(emojipedia);

function createCard(item) {
  return (
    <Card
      key={item.id}
      picture={item.emoji}
      name={item.name}
      meaning={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

//
