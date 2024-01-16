import React from 'react'
import jethroProfile from "../images/Jethro-Profil.png";
import privateIcon from "../Icons/Private.png";
import moreIcon from "../Icons/More-2.png";

function ProfileSettings( {tweetAvatar, titleAuthor, iconVerified, titleDetailAbbr } ) {
    return (
    <div className='flex gap-[25px] ml-[4rem] '>
        <span>
                <img src={jethroProfile} className="w-[65px] h-[65px] rounded-full " alt="User avatar" />
        </span>
        <div className='flex flex-col font-Inter'>
            <p>
                <span className='text-[1.2rem] font-medium '> 
                    <span className='flex gap-[5px] '>
                    {"Jethro Muluba"} 
                    <img src={privateIcon} className='w-[25px] h-[25px]' alt="Icon Verified" />
                    </span>
                </span>
            </p>
            <p>
                <span className='text-[1.2rem] font-medium text-[#6E767D] '> {"@jethroMuluba_"} </span>
            </p>

        </div>
        <button className='m-[15px] bg-none border-none cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full p-[10px]'>
            <img src={moreIcon} alt="" />
        </button>

    </div>
    )
}
export default ProfileSettings;
