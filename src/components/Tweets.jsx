import Tweet from "./Tweet";
import avatarCnn from '../images/tweet-profile-photo.png';
import avatarTnyt from '../images/Tweet-Profile-Photo-2.png';
import tweetImage from '../images/tweet-image.png'
import tweeterAvatar from '../images/Tweeter-Profile-Photo.png'
import jethroTweet from '../images/Jethro-Tweet.png'
import jethroProfil from '../images/Jethro-Profil.png'



function Tweets () {
    const tweetsData = [
        {
            id: 1,
            tweetAvatar: jethroProfil,
            titleAuthor: "Jethro Muluba",
            titleDetailAbbr: "@JethroMuluba",
            titleDetailHourAndDate: '. Now',
            tweetText: "As Web Designer / Ui and Ux. I'm a web designer with over five years of experience in creating a web mock-up andfunctional digital experience for many clients",
            tweetImage: jethroTweet,
            tweetActionReply: 10,
            tweetActionRetweet: 20,
            tweetActionReact: 60,

        },

        {
            id: 2,
            tweetAvatar: avatarCnn,
            titleAuthor: "CNN", 
            titleDetailAbbr: "@CNN",
            titleDetailHourAndDate: ". 7m",
            tweetText: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.', 
            tweetActionReply: 57, 
            tweetActionRetweet: 144,
            tweetActionReact: 184,
        },
        
        {
            id: 3,
            tweetAvatar: avatarTnyt,
            titleAuthor: "The New York Times", 
            titleDetailAbbr: "@nytimes",
            titleDetailHourAndDate: '. 2h',
            tweetText: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land',
            tweetImage: tweetImage,
            tweetActionReply: 19,
            tweetActionRetweet: 48,
            tweetActionReact: 482,
        },

        {
            id: 4,
            tweetAvatar: tweeterAvatar,
            titleAuthor: "Twitter",
            titleDetailAbbr:"@Twitter",
            titleDetailHourAndDate: '. Oct 4',
            tweetText: 'BIG NEWS lol jk still Twitter',
            tweetActionReply: 6.8,
            tweetActionRetweet: 36.6,
            tweetActionReact: 267.1,
        },

        {
            id: 5,
            tweetAvatar: tweeterAvatar,
            titleAuthor: "Twitter",
            titleDetailAbbr:"@Twitter",
            titleDetailHourAndDate: '. Oct 4',
            tweetText: 'hello literally everyone',
            tweetActionReply: 118.7,
            tweetActionRetweet: 785.4,
            tweetActionReact: 3.3,
        },

        {
            id: 6,
            tweetAvatar: tweeterAvatar,
            titleAuthor: "Twitter",
            titleDetailAbbr:"@Twitter",
            titleDetailHourAndDate: '. Oct 4',
            tweetText: 'hello literally everyone',
            tweetActionReply: 118.7,
            tweetActionRetweet: 785.4,
            tweetActionReact: 3.3,
        },


    ]

    return(
<div className="tweets">
        {tweetsData.map((tweet) => (
        <Tweet
            key={tweet.id}
            tweetAvatar={tweet.tweetAvatar}
            titleAuthor={tweet.titleAuthor}
            titleDetailAbbr={tweet.titleDetailAbbr}
            titleDetailHourAndDate={tweet.titleDetailHourAndDate}
            tweetText={tweet.tweetText}
            tweetImage={tweet.tweetImage}
            tweetActionReply={tweet.tweetActionReply}
            tweetActionRetweet={tweet.tweetActionRetweet}
            tweetActionReact={tweet.tweetActionReact}
        />
        ))}
    </div>
    )
}
export default Tweets;