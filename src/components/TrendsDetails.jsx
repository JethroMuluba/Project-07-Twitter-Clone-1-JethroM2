import React from 'react'
import moreIcon from "../Icons/More-3.png";

function TrendsDetails( {trendTitle, trendAbbr, trendCounter} ) {
    return (
        <span>
                <div className='flex flex-col gap-[4px] p-[10px] hover:bg-[#484545] '>

                    <div className='flex justify-between text-[#808080] font-medium '>
                        <p> {trendTitle}</p>
                        <button className='bg-none border-none cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full pr-[10px]'>
                            <img src= {moreIcon} alt="more icon" />
                        </button>
                    </div>

                    <p className='text-[1.3rem] font-medium '> {trendAbbr}</p>
                    <p  className='flex justify-between text-[#808080] font-medium'> {trendCounter}</p>

                </div>
        </span>
    )
}
export default TrendsDetails;