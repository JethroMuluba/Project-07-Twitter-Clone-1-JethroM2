
import iconVerified from '../Icons/Verified.png';
import TweetAction from './TweetAction';
import replyIcon from '../Icons/Reply.png';
import retweetIcon from '../Icons/Retweet.png';
import reactIcon from '../Icons/React.png';
import shareIcon from '../Icons/Share.png';

function Tweet ({tweetAvatar, titleAuthor, titleDetailAbbr, titleDetailHourAndDate, tweetText, tweetImage, tweetActionReply ,tweetActionRetweet, tweetActionReact  }) {
    return(
        <div className="tweet">
            <a href="#" className="tweet-avatar">
                <img src={tweetAvatar} alt="User tweet avatar" />
            </a>
            <div className='tweet-content'>
                <div className='tweet-body'>
                    <p className='tweet-title'>
                        <span className='tweet-title-author'> <a href="#" className='my-own-link-style' >{titleAuthor} <img src={iconVerified} alt="Icon Verified" /></a></span>                     
                        <span className='tweet-title-details'> {titleDetailAbbr} </span>
                        <span className='tweet-title-details'> {titleDetailHourAndDate} </span>
                    </p>
                    <p className='tweet-text'> {tweetText} </p>

                </div>
                <a href="#" className='tweet-image'>
                    <img src= {tweetImage}  />
                </a>
                <div className='tweet-actions'>
                    <TweetAction iconAction={replyIcon} counterAction={tweetActionReply}/>
                    <TweetAction iconAction={retweetIcon} counterAction={tweetActionRetweet}/>
                    <TweetAction iconAction={reactIcon} counterAction={tweetActionReact}/>
                    <TweetAction iconAction={shareIcon} />

                </div>

            </div>

        </div>
    )
}
export default Tweet;