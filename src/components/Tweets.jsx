import Tweet from "./Tweet";
import avatarCnn from '../images/tweet-profile-photo.png';
import avatarTnyt from '../images/Tweet-Profile-Photo-2.png';
import tweetImage from '../images/tweet-image.png'
import tweeterAvatar from '../images/Tweeter-Profile-Photo.png'
import jethroTweet from '../images/Jethro-Tweet.png'
import jethroProfil from '../images/Jethro-Profil.png'



function Tweets () {
    return(
        <div className="tweets">
            <Tweet tweetAvatar={jethroProfil} titleAuthor={"Jethro Muluba"} titleDetailAbbr={"@JethroMuluba"} titleDetailHourAndDate={'. Now'} tweetText={"As Web Designer / Ui and Ux. I'm a web designer with over five years of experience in creating a web mock-up andfunctional digital experience for many clients"} tweetImage={jethroTweet} tweetActionReply= {"10.7K"} tweetActionRetweet= {'56.2K'} tweetActionReact= {"62K"} />
            <Tweet tweetAvatar={avatarCnn} titleAuthor={"CNN"} titleDetailAbbr={"@CNN"} titleDetailHourAndDate={'. 7m'} tweetText={'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'} tweetActionReply= {"57"} tweetActionRetweet= {'144'} tweetActionReact= {"184"}/>
            <Tweet tweetAvatar={avatarTnyt} titleAuthor={"The New York Times"} titleDetailAbbr={"@nytimes"} titleDetailHourAndDate={'. 2h'} tweetText={'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land'} tweetImage={tweetImage} tweetActionReply= {"19"} tweetActionRetweet= {'48'} tweetActionReact= {"482"}/>
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'BIG NEWS lol jk still Twitter'} tweetActionReply= {"6.8K"} tweetActionRetweet= {'36.6K'} tweetActionReact= {"267.1K"}/>
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'hello literally everyone'} tweetActionReply= {"118.7K"} tweetActionRetweet= {'785.4K'} tweetActionReact= {"3.3M"}/>
            <Tweet tweetAvatar={tweeterAvatar} titleAuthor={"Twitter"} titleDetailAbbr={"@Twitter"} titleDetailHourAndDate={'. Oct 4'} tweetText={'hello literally everyone'} tweetImage={tweetImage} tweetActionReply= {"118.5K"} tweetActionRetweet= {'785.4'} tweetActionReact= {"3.3M"}/>
            


        </div>
    )
}
export default Tweets;