import tweetAvatar from '../images/tweet-profile-photo.png'
import iconVerified from '../Icons/Verified.png'

function Tweet ({titleAuthor, titleDetailAbbr, titleDetailHourAndDate, tweetText }) {
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
                <div className='tweet-actions'>

                </div>

            </div>

        </div>
    )
}
export default Tweet;