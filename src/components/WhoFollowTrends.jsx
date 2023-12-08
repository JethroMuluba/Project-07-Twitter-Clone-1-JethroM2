import React from 'react'
import iconVerified from "../Icons/Verified.png";

function WhoFollowTrends({avatarProfil, titleAuthor, titleAuthorAbbr}) {
    return (
    <div className='who-follow-conteiner'>

        <div className='who-follow-content'>
            <a href="#" className="avatar-profile-settings">
                <img src={avatarProfil} alt="User avatar" />
            </a>

            <div className='profile-settings-body'>
                <p>
                    <span className='tweet-title-author-set'> <a href="#" className='my-own-link-style' >{titleAuthor} <img src={iconVerified} alt="Icon Verified" /></a></span>
                </p>

                <p>
                    <span className='tweet-title-details-set'> {titleAuthorAbbr} </span>
                </p>
            </div>
        </div>


        <button className='my-own-button'>
            Follow
        </button>

    </div>
    )
}

export default WhoFollowTrends;
