import React from 'react'
import iconVerified from "../Icons/Verified.png";

function WhoFollowTrends({avatarProfil, titleAuthor, titleAuthorAbbr}) {
    return (
    <div className='flex justify-between gap-[5px] py-[5px] px-[10px] hover:bg-[#484545]'>

        <div className='flex gap-[10px] '>

        {/* The conditional render of avatar Profil */}    
        {avatarProfil ? (    <span className="avatar-profile-settings">
                <img src={avatarProfil} alt="User avatar" />
            </span>) : null}
        

            <div className='flex flex-col font-Inter'>
                <p>
                    <span className='text-[1.2rem] font-medium'> 
                        <span className='flex gap-[5px] '>
                            {titleAuthor} 
                            <img src={iconVerified} className='w-[30px] h-[30px]' alt="Icon Verified" />
                        </span>
                    </span>
                </p>

                <p>
                    <span className='text-[1.2rem] font-medium text-[#6E767D]'> {titleAuthorAbbr} </span>
                </p>
            </div>
        </div>


        <button className='bg-[#ffffff] font-[Inter sans-serif] font-bold text-[#000000] border-none rounded-full px-[15px] my-[10px] cursor-pointer hover:bg-[#dedddd;] '>
            Follow
        </button>

    </div>
    )
}

export default WhoFollowTrends;
