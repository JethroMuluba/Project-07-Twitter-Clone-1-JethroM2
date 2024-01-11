import React from 'react'
import iconVerified from "../Icons/Verified.png";


export default function UserProfilDetails() {
  return (
    <div className='user-profil-details-container'>

        <div className='user-profil-detail-view'>

        <div className='profile-settings-body'>
          <p>
            <span className='tweet-title-author-set'> <a href="#" className='my-own-link-style' > CNN <img src={iconVerified} alt="Icon Verified" /></a></span>
          </p>

          <p>
            <span className='tweet-title-details-set'> @CNN </span>
          </p>

        </div>

        </div>


        <p className='user-text-purpos'>
          It's our job to #GoThere & tell the most difficul stories. For breaking news, follow @CNNBRK and download our app cnn.com/apps
        </p>

        <div className='user-elements'>

          <div className='link-elements'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.615 16.077H7.077q-1.692 0-2.884-1.192Q3 13.693 3 12q0-1.691 1.193-2.885q1.192-1.193 2.884-1.193h3.538v1H7.077q-1.27 0-2.173.904T4 12q0 1.27.904 2.173t2.173.904h3.538zM8.5 12.5v-1h7v1zm4.885 3.577v-1h3.538q1.27 0 2.173-.904T20 12q0-1.27-.904-2.173t-2.173-.904h-3.538v-1h3.538q1.692 0 2.885 1.192Q21 10.307 21 12q0 1.691-1.193 2.885q-1.192 1.193-2.884 1.193z"></path></svg>
            <p>
              cnn.com
            </p>
          </div>

          <div className='link-elements'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="gray" d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"></path></svg>
            <p>
              Join Tweeter on febuary 2007
            </p>
          </div>

        </div>

    </div>

  )
}
