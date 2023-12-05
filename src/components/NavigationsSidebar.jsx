function NavigationsSidebar( {switchLinkIcon,linkName} ) {
    return(
        <div className="tweet-action">
        <button className='my-own-button' >
            <img src= {switchLinkIcon}  alt="Link icon" />
        </button>
        <p> {linkName} </p>

    </div>
    )
}
export default NavigationsSidebar;