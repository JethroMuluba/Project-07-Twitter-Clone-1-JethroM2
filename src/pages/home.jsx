import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import Tweet from '../components/Tweet';

function Home() {
    return (
        <main className="timeline">
            
            <Header/>
            <TweetEditor/>
            <Tweets />
        </main>

    );
}

export default Home;