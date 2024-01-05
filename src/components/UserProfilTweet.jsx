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

                <button className='my-own-button'>
                    <img className='iconMore' src= {IconMore} alt="Icon more" />
                </button>

                <button className='follow-button'>
                    Follow
                </button>

            </div>
        </div>

    </div>
    )
}
