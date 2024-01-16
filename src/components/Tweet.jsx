
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
            <span className="flex-shrink-0 flex-grow-0 flex-basis-70">
                <NavLink to="/cnnprofil">
                    <img src={tweetAvatar} alt="User tweet avatar" className='max-w-full max-h-[70px] rounded-full'/>
                </NavLink>
            </span>
            
            <div className='flex flex-col items-start justify-start gap-[30px] w-full'>
                <div className='flex flex-col gap-4 '>
                    <p className='flex justify-start items-start gap-[10px] text-2xl'>
                        <span className=' text-2xl'> 
                            <span className='flex gap-[5px]' >
                                {titleAuthor} 
                                <img src={iconVerified} className='w-[30px] h-[30px] ' alt="Icon Verified" />
                            </span>
                        </span>                     
                        <span className='text-[#6E767D] '> {titleDetailAbbr} </span>
                        <span className='text-[#6E767D] '> {titleDetailHourAndDate} </span>
                    </p>
                    <p className='text-2xl text-[#D9D9D9]'> {tweetText} </p>

                </div>
                {/* The conditional render of Tweet Image */}
                    {tweetImage ? (
                        <span href="#" className='w-full'>
                            <img src={tweetImage} className='max-w-full h-auto rounded-[50px] border-[1px] border-[#2F3336]' alt="Tweet Image" />
                        </span>
                    ) : null}
                <div className='flex justify-center items-center gap-20 text-grey text-base'>
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