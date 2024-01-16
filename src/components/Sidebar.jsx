import NavigationsSidebar from "./NavigationsSidebar";
import twiterIcon from "../Icons/Twitter.png";
import homeIcon from "../Icons/Home-Fill.png";
import exploreIcon from "../Icons/Explore.png";
import notificationIcon from "../Icons/Notifications.png";
import messageIcon from "../Icons/Messages.png";
import bookmarkIcon from "../Icons/Bookmarks.png";
import listIcon from "../Icons/Lists.png";
import profileIcon from "../Icons/Profile.png";
import moreIcon from "../Icons/More.png";
import TweetButtonSidebar from "./TweetButtonSidebar";
import ProfileSettings from "./ProfileSettings";
import jethroProfile from "../images/Jethro-Profil.png";
import privateIcon from "../Icons/Private.png";



function Sidebar() {
    const linksData = [
        {
            id: 1,
            iconName: twiterIcon
        },

        {
            id: 2,
            iconName: homeIcon,
            name: "Home",
        },

        {
            id: 3,
            iconName: exploreIcon,
            name: "Explore",
        },

        {
            id: 4,
            iconName: notificationIcon,
            name: "Notifications",
        },

        {
            id: 5,
            iconName: messageIcon,
            name: "Messages",
        },

        {
            id: 6,
            iconName: bookmarkIcon,
            name: "Bookmarks",
        },

        {
            id: 7,
            iconName: listIcon,
            name: "Lists",
        },

        {
            id: 8,
            iconName: profileIcon,
            name: "Profile",
        },

        {
            id: 9,
            iconName: moreIcon,
            name: "More",
        }
    ];

    

    // const profileSettingsData = [
    //     {
    //         id: 1,
    //         userAvatar: jethroProfile,
    //         userTitle: "Jethro Muluba",
    //         icon: privateIcon,
    //         titleDetail: "@jethroMuluba",
    //     },
    // ]

    return(
        <aside className="flex-shrink-0 flex-grow-0 flex-basis-[400px] sticky top-0 h-full border-l-1 border-gray-700 pt-8 ">
            <div className="flex flex-col font-Inter ml-[90px] pb-[165px] ">
            {linksData.map((link) => (
                <NavigationsSidebar
                key={link.id}
                switchLinkIcon={link.iconName}
                linkName={link.name}
                />
            ))}

            <TweetButtonSidebar/>
            </div>

            {/* {profileSettingsData.map((profileSetting) => (
                <ProfileSettings 
                // key={profileSetting.id}
                // tweetAvatar={profileSetting.userAvatar}
                // titleAuthor={profileSetting.userTitle}
                // iconVerified={profileSetting.icon}
                // titleDetailAbbr={profileSetting.titleDetail}
                />
            ))} */}
            <ProfileSettings/>

            
        </aside>
    )
}
export default Sidebar;