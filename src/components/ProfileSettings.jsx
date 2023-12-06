import React from 'react'
import jethroProfile from "../images/Jethro-Profil.png";
import privateIcon from "../Icons/Private.png";
import moreIcon from "../Icons/More-2.png";

function ProfileSettings( {tweetAvatar, titleAuthor, iconVerified, titleDetailAbbr } ) {
  return (
    <div className='profile-settings-conteiner'>
        <a href="#" className="avatar-profile-settings">
                <img src={jethroProfile} alt="User avatar" />
        </a>
        <div className='profile-settings-body'>
            <p>
                <span className='tweet-title-author-set'> <a href="#" className='my-own-link-style' >{"Jethro Muluba"} <img src={privateIcon} alt="Icon Verified" /></a></span>
            </p>
            <p>
                <span className='tweet-title-details-set'> {"@jethroMuluba_"} </span>
            </p>

        </div>
        <button className='my-own-button'>
            <img src={moreIcon} alt="" />
        </button>

    </div>
  )
}
export default ProfileSettings;
