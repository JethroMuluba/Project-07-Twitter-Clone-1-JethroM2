import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import CnnProfil from './CnnProfil';



function Home() {
    return (
        <main className="timeline">
            <Header/>
            <TweetEditor/>
            <Tweets />
            <CnnProfil/>
            
        </main>

    );
}

export default Home;