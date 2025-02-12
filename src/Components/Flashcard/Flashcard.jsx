
import { useState } from "react";
import "./Flashcard.css"

let front = ["Why do you capitalize function names in React?",
    "What is JSX in React?","What is the difference between a class component and a functional component?",
     "What is a React hook?", "What is state in React?", "What is a prop in React?"];
let back = ["Capitalized function names distinguish React components from HTML elements, ensuring JSX interprets them as user-defined components.",
    "JSX is a syntax extension that allows writing HTML-like code in JavaScript, which is transpiled to regular JavaScript by Babel.",
    "Class components extend React.Component with lifecycle methods, while functional components are simpler and use hooks for state and effects.",
     "A React hook is a function that enables React features (e.g., state, context, lifecycle methods) in functional components.",
      "State is an object that holds a component's data and triggers a re-render when updated.",
       "Props are inputs passed from parent to child components and are read-only in the child component."];

export default function Flashcard({value}) {

const [cardFace, setCardFace]= useState(front[value-1]);

function handleClick() {
    if (cardFace === front[value-1]) {
        setCardFace(back[value-1])
        console.log(`back ${value} ${back[value-1]}`)
    }
    else {
        setCardFace(front[value-1])
        console.log(`front ${value} ${front[value-1]}`)
    }

}

    return (
        <button className = "flashcard" onClick = {handleClick} style= {{ border: "2px solid black", padding: "10px", margin: "10px"}} >
        {cardFace}
     </button>
    )
    
}