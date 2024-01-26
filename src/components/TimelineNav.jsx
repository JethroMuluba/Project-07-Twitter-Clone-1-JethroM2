import React from 'react'

export default function TimelineNav() {
  return (
    <>

        <nav role='navigation' className='mt-[20px] '>

            <div >

                <div role='tablist' className='flex justify-between border-b  border-px border-[#2F3336]   '>

                    <div role='presentation' className='pt-[20px] px-[50px] hover:bg-[#353535]    '>
                        <a href="" role='tab'>
                            <div>
                                <div>
                                    <span className='text-[20px] font-medium '>Postes</span>
                                    <div className=' border-b-8  border-[#1D9BF0] mt-4'></div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div role='presentation' className='py-[20px] px-[50px] hover:bg-[#353535] '>
                        <a href="" role='tab'>
                            <div>
                                <div>
                                    <span  className='text-[20px] font-medium text-[#6E767D] '>Affiliates</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div role='presentation' className='py-[20px] px-[50px] hover:bg-[#353535] '>
                        <a href="" role='tab'>
                            <div>
                                <div>
                                    <span  className='text-[20px] font-medium text-[#6E767D] '>Replies</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div role='presentation' className='py-[20px] px-[50px] hover:bg-[#353535] '>
                        <a href="" role='tab'>
                            <div>
                                <div>
                                    <span  className='text-[20px] font-medium text-[#6E767D] '>Medias</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div role='presentation' className='py-[20px] px-[50px] hover:bg-[#353535] '>
                        <a href="" role='tab'>
                            <div>
                                <div>
                                    <span  className='text-[20px] font-medium text-[#6E767D] '>Likes</span>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    </>
  )
}
