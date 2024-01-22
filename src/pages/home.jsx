import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';




function Home() {
    return (
        <main className="flex-basis-[1000px] text-[Inter, sans-serif] border-[1px] border-[#2F3336] ">

            <Header/>
            <TweetEditor/>
            <Tweets />

            
        </main>

    );
}

export default Home;