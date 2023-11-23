import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';

function Home() {
    return (
        <main className="timeline">
            {/* <h1>Timeline here</h1> */}
            <Header/>
            <TweetEditor/>
        </main>

    );
}

export default Home;