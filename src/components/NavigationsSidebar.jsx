import { useNavigate } from 'react-router-dom';


function NavigationsSidebar( {switchLinkIcon,linkName} ) {
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }
    return(

    <div className="flex font-[Inter, sans-serif] gap-[25px] w-auto p-4 mb-[20px] hover:bg-[#474444] hover:rounded-full transition duration-0 delay-0.3 hover:duration-300 hover:ease-in-out cursor-pointer " onClick={() => handleClick("/")}>

        <button className='bg-none border-none'>
            <img src= {switchLinkIcon}  alt="Link icon" />
        </button>

        <span className="text-[1.2rem] font-meduim ">
            <p> {linkName} </p>
        </span>

    </div>



    )
}
export default NavigationsSidebar;