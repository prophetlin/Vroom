import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import PollBarObject from '../../Common/PollBarObject';
import { VroomContext } from '../../Common/VroomContext';

/*
[{
    name: "Poll 1",
    question: "What project is more awesome?",
    options: [ 
        {option: "Vroom",
        names: ["amy", "bob"]},
        {option: "Vroom but in blue",
        names: ["steven", "someone"]}
    ]   
}]
*/

const PollNotLaunched = (props) => {

    const {
        setPollPage,
        currentPoll,
        activePoll,
        setActivePoll,
        polls,
        setPolls
    } = useContext(VroomContext);

    const isActive = currentPoll === activePoll;
    
    const poll = polls[currentPoll];

    // need to get these values
    const options = poll.options;
    const question = poll.question;

    const createNewPoll = () => {
        setPollPage("build");
    }
    return (
        <div className="tab-container">
            <h4 className="pt-5">Your Poll</h4>
            <PollBarObject></PollBarObject>
            <div className="mt-3 d-flex justify-content-between">
                <Button onClick={props.launchPoll} n>Launch Poll</Button>
                <Button onClick={createNewPoll}>+ New Poll</Button>
            </div>
            
        </div>
    )
}

export default PollNotLaunched
