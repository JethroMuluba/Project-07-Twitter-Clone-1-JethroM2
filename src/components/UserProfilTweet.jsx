import React from 'react'
import coverImage from "../images/CoverCnn.jpeg"
import userProfilImg from "../images/ProfilCnn.jpg"
import IconMore from "../Icons/More.png"

export default function UserProfilTweet() {
    return (
    <div className='user-profil-tweet-container'>

        <img className='user-cover' src= {coverImage} alt="User Cover" />

        <div className='userProfilContainer'>

            <img className="userProfilCnn" src= {userProfilImg} alt="User Profil" />

            <div className='userProfilButtonElements'>

                <button className='w-[70px] h-[30px]bg-none border-none ease-in-out cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full p-[10px]'>
                    <img className='iconMore' src= {IconMore} alt="Icon more" />
                </button>

                <button className='bg-[#ffffff] font-[Inter sans-serif] font-bold text-[#000000] border-none rounded-full px-[15px] my-[10px] cursor-pointer hover:bg-[#dedddd;] '>
                    Follow
                </button>

            </div>
        </div>

    </div>
    )
}
