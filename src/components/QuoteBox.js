import Button from './Button';


const QuoteBox = ( {randomQuote, randomAutor,  randomColor, index } ) => {


    return (
        <div className="card">
            <div>
                <p className="text-quote" style={{color: `${randomColor}`}}> {randomQuote} </p>  
            </div>
            <div>
                <p className="text-author" style={{color: `${randomColor}`}}> {randomAutor} </p>  
            </div>
            <Button index = {index} randomColor= {randomColor} />
        </div>
    );
}

export default QuoteBox;
