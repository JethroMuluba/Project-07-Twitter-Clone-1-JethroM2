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
    ]
    return(
        <aside className="sidebar">
            {linksData.map((link) => (
                <NavigationsSidebar
                key={link.id}
                switchLinkIcon={link.iconName}
                linkName={link.name}
                />
            ))}
        </aside>
    )
}
export default Sidebar;