import NavigationsSidebar from "./NavigationsSidebar";
import replyIconColor from "../Icons/Reply-color.png"

function Sidebar() {
    return(
        <aside>
            <NavigationsSidebar 
                switchLinkIcon= {replyIconColor}
                linkName= {"Reply Icon Color"}  />
                
        </aside>
    )
}
export default Sidebar;