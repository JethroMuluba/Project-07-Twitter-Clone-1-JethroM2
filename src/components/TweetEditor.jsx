import avatar from '../images/profile-photo.png'
import iconAction1 from '../Icons/Media.png'
import iconAction2 from '../Icons/Gif.png'
import iconAction3 from '../Icons/Poll.png'
import iconAction4 from '../Icons/Emoji.png'
import iconAction5 from '../Icons/Schedule.png'
import jethroProfil from '../images/Jethro-Profil.png'





function TweetEditor () {
    return(
        <div className="tweet-editor">
            <a href="#" className='avatar'>
                <img src= {jethroProfil} alt="User profil Avatar"/>
            </a>
            <div className='tweet-editor-form'>
            <input type="text" placeholder=" What's happening? " className='tweet-editor-input'/>
            <div className='tweet-editor-buttons'>
                <article className='tweet-editor-actions'>
                    <button className='my-own-button'><img src= {iconAction1} alt="Icon Media" /></button>
                    <button className='my-own-button'><img src= {iconAction2} alt="Icon Gif" /></button>
                    <button className='my-own-button'><img src= {iconAction3} alt="Icon Poll" /></button>
                    <button className='my-own-button'><img src= {iconAction4} alt="Icon Emoji" /></button>
                    <button className='my-own-button'><img src= {iconAction5} alt="Icon Schedule" /></button>
                
            
                </article>
                <button type="button" className='button'>Tweet</button>
            </div>
            </div>

        </div>
    )
}
export default TweetEditor;