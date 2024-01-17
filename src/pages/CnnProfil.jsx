import React from 'react'
import HeaderCnn from '../components/HeaderCnn';
import UserProfilTweet from '../components/UserProfilTweet';
import UserProfilDetails from '../components/UserProfilDetails';
import Tweets from '../components/Tweets';


export default function CnnProfil() {

  const userInfos = [
    { 
      id: 1,
      name: "CNN",
      postCounter: "420,7 k posts"
    }
  ];

  return (

    <main className="timeline">

      {userInfos.map((userInfo) => (
      <HeaderCnn
          key={userInfo.id}
          titleAuthor={userInfo.name}
          titleAuthorAbbr={userInfo.postCounter}
      />
      ))}

      <UserProfilTweet/>
      <UserProfilDetails/>
      

      
        
    </main>
  )
}


