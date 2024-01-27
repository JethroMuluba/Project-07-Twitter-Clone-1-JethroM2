import React from 'react'
import HeaderCnn from '../components/HeaderCnn';
import UserProfilTweet from '../components/UserProfilTweet';
import UserProfilDetails from '../components/UserProfilDetails';
import TimelineNav from '../components/TimelineNav';
import avatarCnn from '../images/tweet-profile-photo.png';
import Tweet from '../components/Tweet';


export default function CnnProfil() {

  const userInfos = [
    { 
      id: 1,
      name: "CNN",
      postCounter: "420,7 k posts"
    }
  ];


  const cnnData = [
    {
      id: 1,
      tweetAvatar: avatarCnn,
      titleAuthor: "CNN", 
      titleDetailAbbr: "@CNN",
      titleDetailHourAndDate: ". 7m",
      tweetText: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.', 
      tweetActionReply: 57, 
      tweetActionRetweet: 144,
      tweetActionReact: 184,
  },
  ]

  return (

    <main className="flex-basis-[1000px] text-[Inter, sans-serif] border-[1px] border-[#2F3336]">

      {userInfos.map((userInfo) => (
      <HeaderCnn
          key={userInfo.id}
          titleAuthor={userInfo.name}
          titleAuthorAbbr={userInfo.postCounter}
      />
      ))}

      <UserProfilTweet/>

      <UserProfilDetails/>

      <TimelineNav/>

      {cnnData.map((tweet) => (
      <Tweet
            key={tweet.id}
            tweetAvatar={tweet.tweetAvatar}
            titleAuthor={tweet.titleAuthor}
            titleDetailAbbr={tweet.titleDetailAbbr}
            titleDetailHourAndDate={tweet.titleDetailHourAndDate}
            tweetText={tweet.tweetText}
            tweetImage={tweet.tweetImage}
            tweetActionReply={tweet.tweetActionReply}
            tweetActionRetweet={tweet.tweetActionRetweet}
            tweetActionReact={tweet.tweetActionReact}
        />
        ))}
    
      

      
        
    </main>
  )
}


