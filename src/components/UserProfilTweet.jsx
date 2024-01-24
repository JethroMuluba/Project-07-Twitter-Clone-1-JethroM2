import React from 'react'
import coverImage from "../images/CoverCnn.jpeg"
import userProfilImg from "../images/ProfilCnn.jpg"
import IconMore from "../Icons/More.png"

export default function UserProfilTweet() {
    return (
    <div>

        <img className='w-[100%] h-[100%] mt-[110px] ' src= {coverImage} alt="User Cover" />

        <div className='absolute top-[300px] w-[841px] flex justify-between items-baseline mx-[20px] '>

            <img className="w-[200px] h-[200px] rounded-[20px] border-[8px] border-black " src= {userProfilImg} alt="User Profil" />

            <div className='flex gap-[10px] pb-[10px] '>

                <button className='w-[70px] h-[30px]bg-none border-none ease-in-out cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full p-[10px]'>
                    <img className='w-[50px] h-[50px]' src= {IconMore} alt="Icon more" />
                </button>

                <button className='bg-[#ffffff] font-[Inter sans-serif] font-bold text-[#000000] border-none rounded-full px-[15px] my-[10px] cursor-pointer hover:bg-[#dedddd;] '>
                    Follow
                </button>

            </div>
        </div>

    </div>
    )
}
