import QuoteBox from './components/QuoteBox';
import { useState } from 'react';
import quotes from './quotes.json'
import './App.css';

function App() {

  const colors = [ "indianRed", "tomato", "mediumseagreen", "lightseagreen", "blue", "royalblue" ]

  const getRandomColor  =  () => {
    let colorHexCode = ""
    colorHexCode = colors[Math.floor( Math.random() * colors.length)]
    return colorHexCode;
  }

  let randomColor = getRandomColor();



    const [ randomIndex, setRandomIndex] = useState(0);

    const getRandomIndex = () => {
        setRandomIndex( Math.floor( Math.random() * quotes.length))
    }


    const randomQuote = quotes[randomIndex].quote
    const randomAutor = quotes[randomIndex].author


  return (
    <div className="App" style={{backgroundColor: `${randomColor}`}}>
      <QuoteBox className="card" randomQuote={randomQuote} randomAutor={randomAutor} index={getRandomIndex} randomColor={randomColor}/>
    </div>
  );

}

export default App;
