import React from 'react'
import SettingsIcon from "../Icons/Settings.png";

function Trends() {
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

        </div>
    </div>
  )
}
export default Trends;