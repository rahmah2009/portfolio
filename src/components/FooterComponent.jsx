import React from 'react'
import { FaceBookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './common/Icon'
// import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './common/Icon'

const FooterComponent = () => {
  return (
    <footer className='w-full h-[182px] flex items-center justify-center'>
    <div className='flex flex-col w-[232px] gap-4 items-center'>
        <div className='flex items-center justify-between w-full'>
         <FaceBookIcon />
         <InstagramIcon />
         <TwitterIcon />
         <LinkedInIcon />
        </div>
        <small>Copyright ©2020 All rights reserved</small>
    </div>
    </footer>
  )
}

export default FooterComponent