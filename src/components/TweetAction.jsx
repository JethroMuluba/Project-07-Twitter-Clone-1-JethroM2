function TweetAction ( {iconAction, counterAction} ) {
     return(
        <div className="tweet-action">
            <a href="#">
            <img src= {iconAction}  alt="Action icon" />
            </a>
            <p> {counterAction} </p>

        </div>
     )

}
export default TweetAction;