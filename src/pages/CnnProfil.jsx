import React from 'react'
import HeaderCnn from '../components/HeaderCnn';
import UserProfilTweet from '../components/UserProfilTweet';
import UserProfilDetails from '../components/UserProfilDetails';
import Tweets from '../components/Tweets';
import TimelineNav from '../components/TimelineNav';


export default function CnnProfil() {

  const userInfos = [
    { 
      id: 1,
      name: "CNN",
      postCounter: "420,7 k posts"
    }
  ];

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
      

      
        
    </main>
  )
}


