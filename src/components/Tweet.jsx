
import iconVerified from '../Icons/Verified.png';
import TweetAction from './TweetAction';
import replyIcon from '../Icons/Reply.png';
import retweetIcon from '../Icons/Retweet.png';
import reactIcon from '../Icons/React.png';
import shareIcon from '../Icons/Share.png';

function Tweet ({tweetAvatar, titleAuthor, titleDetailAbbr, titleDetailHourAndDate, tweetText, tweetImage }) {
    return(
        <div className="tweet">
            <a href="#" className="tweet-avatar">
                <img src={tweetAvatar} alt="User tweet avatar" />
            </a>
            <div className='tweet-content'>
                <div className='tweet-body'>
                    <p className='tweet-title'>
                        <span className='tweet-title-author'>{titleAuthor}</span>
                        <img src={iconVerified} alt="Icon Verified" />
                        <span className='tweet-title-details'> {titleDetailAbbr} </span>
                        <span className='tweet-title-details'> {titleDetailHourAndDate} </span>
                    </p>
                    <p className='tweet-text'> {tweetText} </p>

                </div>
                <a href="#" className='tweet-image'>
                    <img src= {tweetImage}  />
                </a>
                <div className='tweet-actions'>
                    <TweetAction iconAction={replyIcon} counterAction={'57'}/>
                    <TweetAction iconAction={retweetIcon} counterAction={'144'}/>
                    <TweetAction iconAction={reactIcon} counterAction={'184'}/>
                    <TweetAction iconAction={shareIcon} />

                </div>

            </div>

        </div>
    )
}
export default Tweet;