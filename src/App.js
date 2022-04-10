import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import MyParagraph from './components/MyParagraph';
import { useCallback } from 'react';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  // const [showParagraph2, setShowParagraph2] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
    setShowParagraph((prevState) => !prevState);
  }},[allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle((prevState) => !prevState);
  }
  

  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <MyParagraph showParagraph={showParagraph} />
      {/* {showParagraph2 && <p>This is great</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Show Toggle</Button>
    </div>
  );
}

export default App;
