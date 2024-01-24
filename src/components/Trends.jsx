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
    <div className= 'flex-shrink-0 flex-grow-0 flex-basis-[430px] flex flex-col sticky top-0 h-full  border-l-1 border-gray-700 pt-8 gap-[15px]'>

        <div>
            <input type="text" placeholder='search Twiiter' className='search-bar bg-[#474444] text-white text-capitalize bg-no-repeat bg-cover bg-center focus:outline-none text-1rem py-[1rem] pr-[10.1rem] pl-[3rem] border-transparent rounded-full' />
        </div>

        <div className='bg-[#3a3838] rounded-[10px] font-[Inter sans-serif] mr-[30px] p-[10px] '>
            <div className='flex justify-between text-[1.3rem] font-medium py-[10px] pl-[10px] '>
                <p>Trends for you</p>
                <button className='bg-none border-none cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full p-[10px]'>
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


            <p className='text-[1.3rem] font-medium text-[#1D9BF0] py-[20px] pl-[10px] cursor-pointer hover:bg-[#484545] hover:rounded-b-[10px] '>See more</p>


        </div>

        <div className='bg-[#3a3838] rounded-[10px] font-[Inter sans-serif] mr-[30px] '>

            <div className='text-[1.3rem] font-medium py-[10px] pl-[10px]'>
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

            <p className='text-[1.3rem] font-medium text-[#1D9BF0] py-[20px] pl-[10px] cursor-pointer hover:bg-[#484545] hover:rounded-b-[10px] '>See more</p>


        </div>

        <Footer/>

    </div>
    )
}
export default Trends;