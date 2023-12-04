import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';


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