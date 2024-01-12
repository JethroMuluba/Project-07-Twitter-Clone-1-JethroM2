import React from 'react'
import iconVerified from "../Icons/Verified.png";
import { useNavigate } from 'react-router-dom';


export default function HeaderCnn({titleAuthor, titleAuthorAbbr}) {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <header className ="fixed w-[999px] flex gap-[55px] bg-black/60 border-b border-r border-px border-[#2F3336]  py-[20px] pl-[20px] backdrop-blur z-50 ">

            <button className="my-own-button" onClick={() => handleClick("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.78em" height="1em" viewBox="0 0 16 9"><path fill="white" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"></path><path fill="white" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"></path></svg>
            </button>


            <div className='profile-settings-body'>
                <p>
                    <span className='tweet-title-author-set'> <a href="#" className='my-own-link-style' >{titleAuthor} <img src={iconVerified} alt="Icon Verified" /></a></span>
                </p>

                <p>
                    <span className='tweet-title-details-set'> {titleAuthorAbbr} </span>
                </p>
            </div>

        </header>
    )
}
