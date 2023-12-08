import React from 'react'
import SettingsIcon from "../Icons/Settings.png";
import TrendsDetails from './TrendsDetails';

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
    ]
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
        </div>
    </div>
    )
}
export default Trends;