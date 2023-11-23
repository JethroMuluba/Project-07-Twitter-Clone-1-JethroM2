import avatar from '../images/profile-photo.png'
import iconAction1 from '../Icons/Media.png'
import iconAction2 from '../Icons/Gif.png'
import iconAction3 from '../Icons/Poll.png'
import iconAction4 from '../Icons/Emoji.png'
import iconAction5 from '../Icons/Schedule.png'





function TweetEditor () {
    return(
        <div className="tweet-editor">
            <a href="#" className='avatar'>
                <img src= {avatar} alt="User profil Avatar"/>
            </a>
            <div className='tweet-editor-form'>
            <input type="text" placeholder=" What's happening? " className='tweet-editor-input'/>
            <div className='tweet-editor-buttons'>
                <article className='tweet-editor-actions'>
                    <a href="#">
                    <img src={iconAction1} alt="icon action" />
                    </a>
                    <a href="#">
                    <img src={iconAction2} alt="icon action" />
                    </a>
                    <a href="#">
                    <img src={iconAction3} alt="icon action" />
                    </a>
                    <a href="#">
                    <img src={iconAction4} alt="icon action" />
                    </a>
                    <a href="#">
                    <img src={iconAction5} alt="icon action" />
                    </a>
                </article>
                <button type="button" className='button'>Tweet</button>
            </div>
            </div>

        </div>
    )
}
export default TweetEditor;