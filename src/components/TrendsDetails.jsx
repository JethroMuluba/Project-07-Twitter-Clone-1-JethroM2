import React from 'react'
import moreIcon from "../Icons/More-3.png";

function TrendsDetails( {trendTitle, trendAbbr, trendCounter} ) {
    return (
        <a href="#" className='my-own-link-style'>
                <div className='trendsDetails'>

                    <div className='trends-detail-title'>
                        <p> {trendTitle}</p>
                        <button className='my-own-button'>
                            <img src= {moreIcon} alt="more icon" />
                        </button>
                    </div>

                    <p className='trends-detai-middle'> {trendAbbr}</p>
                    <p  className='trends-detail-title'> {trendCounter}</p>

                </div>
        </a>
    )
}
export default TrendsDetails;