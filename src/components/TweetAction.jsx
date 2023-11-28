import { useState } from "react";

function TweetAction ( {iconAction, counterAction} ) {
    const [counter, setCounter] = useState( counterAction );
    const [actionType, setActionType] = useState("increment");

        const handleClick = () => {
            if (actionType === "increment") {
                setCounter(counter + 1);
                setActionType("decrement");
              } else {
                setCounter(counter - 1);
                setActionType("increment");
              }
        }
           
     return(
        <div className="tweet-action">
            <button className='my-own-button' onClick={handleClick}>
                <img src= {iconAction}  alt="Action icon" />
            </button>
            <p> {counter} </p>

        </div>
     )

}
export default TweetAction;