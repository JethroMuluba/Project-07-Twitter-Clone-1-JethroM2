import { useNavigate } from 'react-router-dom';


function NavigationsSidebar( {switchLinkIcon,linkName} ) {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }
    return(

    <div className="Links-conteiner" onClick={() => handleClick("/")}>

        <button className='navigation-button'>
            <img src= {switchLinkIcon}  alt="Link icon" />
        </button>

        <span className="sidebar-link-style">
            <p> {linkName} </p>
        </span>

    </div>



    )
}
export default NavigationsSidebar;