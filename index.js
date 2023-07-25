// Create container variable to grab #root from HTML
const container = document.getElementById("root");

// Create circles variable to hold an array of objects for circles
const circles = [
    {
        id:1,
        name: "Circle1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png?20070329024902",
        backgroundColor: "#150252"

    },
    {
        id:2,
        name: "Circle2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png?20070329024902",
        backgroundColor: "#901252"
    },
    {
        id:3,
        name: "Circle3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png?20070329024902",
        backgroundColor: "#511652"
    }
];

// Create squares variable to hold an array of objects for squares
const squares = [
    {
        id:4,
        name: "Square1",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606",
        backgroundColor: "#251252"
    },
    {
        id:5,
        name: "Square2",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606",
        backgroundColor: "#451202"
    },
    {
        id:6,
        name: "Square3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606",
        backgroundColor: "#422252"
    }
];

// Create App component
const App = () => {
    // Create state "color" & function "setColor", "color" stores current value of the state which is empty, setColor allows color to be updated 
    const [color, setColor] = React.useState();
    const changeColor = () => {
        const rngColor = "#" + Math.random().toString(16).slice(2,8)
        setColor(rngColor)
    };

    // Create state "counter" & function "useCounter"
    const [counter, useCounter] = React.useState(0);
    const count = () => {
        useCounter(counter+1)
    };

    // Create state "increment" & function "useIncrement"
    const [increment, useIncrement] = React.useState(0);
    const increase = () => {
        useIncrement(increment+1)
    };

    return (
        <section>
            <h1>SHAPES</h1>
            <h2># Of Times Circle Has Been Clicked & Changed Colors: {counter}</h2>

            <ul>
                {
                    circles.map((singleCircle) => {
                        return (
                            <Shapes1 key={singleCircle.id}
                                singleCircle={singleCircle}
                                count={count}
                                changeColor={changeColor}
                                color={color}
                            />
                        )
                    }

                    )}
            </ul>
            <h2># Of Times Square Has Been Clicked & Changed Colors: {increment}</h2>
            <ul>        
                {
                    
                    squares.map((singleSquare) => {
                        return (
                            <Shapes2 key={singleSquare.id}
                                singleSquare={singleSquare}
                                increase={increase}
                                changeColor={changeColor}
                                color={color} 
                            />
                        )
                    })
                }    
            </ul>
        </section>
    )
};

// Additional components
const Shapes1 = ({singleCircle, count, changeColor, color}) => {
    return (
            <div className="circle" idname={singleCircle.name}>
                <h3>Name: {singleCircle.name}</h3>
                <img onClick={() => {
                    count(); changeColor(); singleCircle.backgroundColor = color;
                }} 
                    src={singleCircle.img} 
                    style={{backgroundColor: singleCircle.backgroundColor}}/>
            </div>
    )
};

// Yay more components
const Shapes2 = ({singleSquare, increase, changeColor, color}) => {
    return (
            <div className="square" idname={singleSquare.name}>
                <h3>Name: {singleSquare.name} </h3>
                <img onClick={() => {
                    increase(); changeColor(); singleSquare.backgroundColor = color;
                }} 
                    src={singleSquare.img} 
                    style={{backgroundColor: singleSquare.backgroundColor}}/>
            </div>
    )
};


const root = ReactDOM.createRoot(container);
root.render(<App/>);