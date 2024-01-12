function Header () {
    return(
      <header className="fixed w-[999px] flex justify-between items-center bg-black/60 border-b border-r border-px border-[#2F3336] px-[20px] py-[30px] backdrop-blur z-50 ">
            <h1 className="text-2xl font-bold "> <span>Home</span></h1>
            <button className="my-own-button">
                <img src="src\Icons\Vector.png" alt="Top Tweets" className="w-8 h-auto" />
            </button>
      </header>
    )
}
export default Header;