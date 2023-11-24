import Tweet from "./Tweet";
import avatarCnn from '../images/tweet-profile-photo.png';
import avatarTnyt from '../images/Tweet-Profile-Photo-2.png';
import tweetImage from '../images/tweet-image.png'
import tweeterAvatar from '../images/Tweeter-Profile-Photo.png'



function Tweets () {
    return(
        <div className="tweets">
            <Tweet tweetAvatar={avatarCnn} titleAuthor={"CNN"} titleDetailAbbr={"@CNN"} titleDetailHourAndDate={'. 7m'} tweetText={'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'}/>
            <Tweet tweetAvatar={avatarTnyt} titleAuthor={"The New York Times"} titleDetailAbbr={"@nytimes"} titleDetailHourAndDate={'. 2h'} tweetText={'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land'} tweetImage={tweetImage}/>
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'BIG NEWS lol jk still Twitter'} />
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'hello literally everyone'} />
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'hello literally everyone'} tweetImage={tweetImage} />
            


        </div>
    )
}
export default Tweets;