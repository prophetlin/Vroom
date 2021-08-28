import React from "react";
import PercentageBar from "./PercentageBar";

/*
Poll
{
    name: "Poll 1",
    question: "What project is more awesome?",
    options: [ 
        {option: "Vroom",
        names: ["amy", "bob"]},
        {option: "Vroom but in blue",
        names: ["steven", "someone"]}
    ]   
}
*/

const BarObject = (props) => {
    const activeIndex = props.activeIndex
    const setActiveIndex = props.setActiveIndex

    // let values = props.results == null ? [{value: 42, name: "Zoom"},{value: 58, name: "Teams"}] : props.results;
    // let question = props.question == null ? "What's better?" : props.question;
    // let votes = props.votes == null ? false : props.votes;

    let options = props.options;
    let question = props.question;
    let values = [];

    const getVotes = () => {
        let sum = 0;
        if (options) {
            for (let i =0; i < options.length; i++) {
                sum = sum + options[i].names.length;
            }
            for (let i =0; i < options.length; i++) {
                values.push({name: options[i].option, value: options[i].names.length/sum*100})
            }
        }
        return sum;
    }

    let votes = getVotes();

    const handleClick = (index) => {
        setActiveIndex(index)
        props.setShowStudentsForPoll(true);
    }
    
    return (
        <div>
            <p>{question}</p>
            {values.map((result, index) => (
                <PercentageBar 
                    index={index}
                    value={result.value}
                    name={result.name}
                    active={index === activeIndex} 
                    handleClick={handleClick}
                />
            ))}
            <div className="total-votes">
                <p>{votes === false ? "": `${votes} votes`}</p>
            </div>
        </div>
    );
}

export default BarObject;