function Header () {
    return(
      <header className="fixed w-[999px] flex justify-between items-center bg-black/60 border-b border-r border-px border-[#2F3336] px-[20px] py-[30px] backdrop-blur z-50 ">
            <h1 className="text-2xl font-bold "> <span>Home</span></h1>
            <button className="bg-none border-none ease-in-out cursor-pointer hover:bg-[#1D9BF0]/25 hover:rounded-full p-[10px]">
                <img src="src\Icons\Vector.png" alt="Top Tweets" className="w-8 h-auto" />
            </button>
      </header>
    )
}
export default Header;