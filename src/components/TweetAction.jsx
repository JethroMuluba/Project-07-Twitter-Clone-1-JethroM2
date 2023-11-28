import { useState } from "react";
import replyIconColor from "../Icons/Reply-color.png"

function TweetAction ( {iconAction, counterAction, swichIconAction} ) {
    const [counter, setCounter] = useState( counterAction );
    const [actionType, setActionType] = useState("increment");
    const [switchIcon, setSwitchIcon] = useState( iconAction )

        const handleClick = () => {
            if (actionType === "increment") {
                setCounter(counter + 1);
                setActionType("decrement");
                setSwitchIcon(swichIconAction)
              } else {
                setCounter(counter - 1);
                setActionType("increment");
                setSwitchIcon( iconAction )
              }
        }
           
     return(
        <div className="tweet-action">
            <button className='my-own-button' onClick={handleClick}>
                <img src= {switchIcon}  alt="Action icon" />
            </button>
            <p> {counter} </p>

        </div>
     )

}
export default TweetAction;