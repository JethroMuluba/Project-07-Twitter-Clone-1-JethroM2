
import iconVerified from '../Icons/Verified.png';
import TweetAction from './TweetAction';
import replyIcon from '../Icons/Reply.png';
import replyIconColor from '../Icons/Reply-color.png';
import retweetIcon from '../Icons/Retweet.png';
import retweetIconColor from '../Icons/Retweet-color.png';
import reactIcon from '../Icons/React.png';
import reactIconColor from '../Icons/React-color.png';
import shareIcon from '../Icons/Share.png';
import shareIconColor from '../Icons/Share-color.png';
import { NavLink } from 'react-router-dom';


function Tweet ({tweetAvatar, titleAuthor, titleDetailAbbr, titleDetailHourAndDate, tweetText, tweetImage, tweetActionReply ,tweetActionRetweet, tweetActionReact  }) {
    return(
        <div className="flex justify-start items-start gap-[20px] py-6 px-4 border-b border-[#2F3336]">
            <span href="#" className="tweet-avatar">
                <NavLink to="/cnnprofil">
                    <img src={tweetAvatar} alt="User tweet avatar"/>
                </NavLink>
            </span>
            
            <div className='tweet-content'>
                <div className='tweet-body'>
                    <p className='tweet-title'>
                        <span className='tweet-title-author'> <a href="#" className='my-own-link-style' >{titleAuthor} <img src={iconVerified} alt="Icon Verified" /></a></span>                     
                        <span className='tweet-title-details'> {titleDetailAbbr} </span>
                        <span className='tweet-title-details'> {titleDetailHourAndDate} </span>
                    </p>
                    <p className='tweet-text'> {tweetText} </p>

                </div>
                {/* The conditional render of Tweet Image */}
                    {tweetImage ? (
                        <a href="#" className='tweet-image'>
                            <img src={tweetImage} alt="Tweet Image" />
                        </a>
                    ) : null}
                <div className='tweet-actions'>
                    <TweetAction iconAction={replyIcon} swichIconAction={replyIconColor} counterAction={tweetActionReply}/>
                    <TweetAction iconAction={retweetIcon} swichIconAction={retweetIconColor} counterAction={tweetActionRetweet}/>
                    <TweetAction iconAction={reactIcon} swichIconAction={reactIconColor} counterAction={tweetActionReact}/>
                    <TweetAction iconAction={shareIcon} swichIconAction={shareIconColor} />

                </div>

            </div>

        </div>
    )
}
export default Tweet;