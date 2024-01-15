import avatar from '../images/profile-photo.png'
import iconAction1 from '../Icons/Media.png'
import iconAction2 from '../Icons/Gif.png'
import iconAction3 from '../Icons/Poll.png'
import iconAction4 from '../Icons/Emoji.png'
import iconAction5 from '../Icons/Schedule.png'
import jethroProfil from '../images/Jethro-Profil.png'





function TweetEditor () {
    return(
        <div className="flex items-start justify-start gap-[20px] p-[1rem] mt-[110px] border-b border-px border-[#2F3336]  ">
            <span className='flex-shrink-0 flex-grow-0 flex-basis-[70px]'>
                <img className='max-w-full max-h-[100px] rounded-full' src= {jethroProfil} alt="User profil Avatar"/>
            </span>
            <div className='flex-auto'>
            <input type="text" placeholder=" What's happening? " className='h-[60px] w-full border-none outline-none text-xl bg-black text-white resize-none pt-5 '/>
            <div className='flex items-center justify-between'>
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