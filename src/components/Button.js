
const Button = ( props ) => {

    
    return (
        <div className="button">
            <button onClick={props.index} style={{backgroundColor: `${props.randomColor}`}}>
                <i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};

export default Button;