function NavigationsSidebar( {switchLinkIcon,linkName} ) {
    return(

    <div className="Links-conteiner">

        <button className='navigation-button' >
            <img src= {switchLinkIcon}  alt="Link icon" />
        </button>

        <span className="sidebar-link-style">
            <p> {linkName} </p>
        </span>

    </div>



    )
}
export default NavigationsSidebar;