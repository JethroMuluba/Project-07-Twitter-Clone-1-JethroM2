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
      postCounter: "1 post"
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
  ];

  const profilDetails = [
    {
      id: 1,
      userName: "CNN",
      userAbbr: "@CNN",
      userPurpose: "",
      userLink: "cnn.com",
      yearTojoinTweeter: "Join Tweeter on febuary 2007",
      followingNumber: 1.083,
      followersNumber: 62.1 + "M",
      followersBy: "Followed by 7SUR7.CD and Radio Okapi",
    }
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
      {/* <UserProfilDetails/> */}

      {profilDetails.map((userDetail) => (
      <UserProfilDetails
          key={userDetail.id}
          userName={userDetail.userName}
          userAbbr={userDetail.userAbbr}
          userPurpose={userDetail.userPurpose}
          userLink={userDetail.userLink}
          yearTojoinTweeter={userDetail.yearTojoinTweeter}
          followingNumber={userDetail.followingNumber}
          followersNumber={userDetail.followersNumber}
          followersBy={userDetail.followersBy}
      />
      ))}

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


