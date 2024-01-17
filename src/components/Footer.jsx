import React from 'react'

function Footer() {
  return (
    <footer className='flex-col gap-[10px] pt-[15px] pl-[5px] '>

            <div className='flex gap-[20px] font-[Inter sans-serif] text-[#6E767D] pb-[5px] '>
                <p>Terme of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>

            <div className='footer-section-on-line'>
                <p>Imprint</p>
                <p>Ads info</p>
                <p>More ...</p>
                <p>© 2021 Twitter, Inc.</p>
            </div>

        </footer>
  )
}
export default Footer;
