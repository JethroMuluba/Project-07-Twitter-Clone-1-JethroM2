import React from 'react'
import SettingsIcon from "../Icons/Settings.png";
import TrendsDetails from './TrendsDetails';
import avatarTnyt from '../images/Tweet-Profile-Photo-2.png';
import avatarCnn from '../images/tweet-profile-photo.png';
import tweeterAvatar from '../images/Tweeter-Profile-Photo.png'
import WhoFollowTrends from './WhoFollowTrends';
import Footer from './Footer';
function Trends() {

    const trendsData = [
        {
            id: 1,
            trendTitle: "Trending in Turkey",
            trendAbbr: "#SQUID",
            trendCounter: "2,066 Tweets",
        },

        {
            id: 2,
            trendTitle: "Trending in Turkey",
            trendAbbr: "#SQUID",
            trendCounter: "2,066 Tweets",
        },

        {
            id: 3,
            trendTitle: "Trending in Turkey",
            trendAbbr: "#SQUID",
            trendCounter: "2,066 Tweets",
        },

        {
            id: 4,
            trendTitle: "Trending in Turkey",
            trendAbbr: "#SQUID",
            trendCounter: "2,066 Tweets",
        },

    ];

    const followersData = [
        {
            id: 1,
            avatarProfil: avatarTnyt,
            titleAuthor : "The New York Times",
            titleAuthorAbbr: "@nytimes",
        },

        {
            id: 2,
            avatarProfil: avatarCnn,
            titleAuthor : "CNN",
            titleAuthorAbbr: "@CNN",

        },

        {
            id: 3,
            avatarProfil: tweeterAvatar,
            titleAuthor : "Tweeter",
            titleAuthorAbbr: "@Tweeter",
        },
    ];


    return (
    <div className= 'trends'>

        <div className='trends-search-bar-section'>
            <input type="text" placeholder='search Twiiter' className='search-bar'/>
        </div>

        <div className='trends-for-you-section'>
            <div className='trends-for-you-title'>
                <p>Trends for you</p>
                <button className='my-own-button'>
                    <img src= {SettingsIcon} alt="settings icon" />
                </button>
            </div>

            {trendsData.map((trend) => (
                <TrendsDetails
                key={trend.id}
                trendTitle={trend.trendTitle}
                trendAbbr={trend.trendAbbr}
                trendCounter={trend.trendCounter}
                />
            ))}


            <p className='see-more'><a href="#" className='link-style'>See more</a></p>


        </div>

        <div className='who-to-follow-section'>

            <div className='trends-for-you-title'>
                <p>Who to follow</p>
            </div>
            


            {followersData.map((follower) => (
                <WhoFollowTrends
                key={follower.id}
                avatarProfil={follower.avatarProfil}
                titleAuthor={follower.titleAuthor}
                titleAuthorAbbr={follower.titleAuthorAbbr}
                />
            ))}

            <p className='see-more'><a href="#" className='link-style'>See more</a></p>

        </div>

        <Footer/>

    </div>
    )
}
export default Trends;