import React from 'react'
import MobileChatProject from './MobileChatProject';
import MobileShopProject from './MobileShopProject';
import MobilePortfolioProject from './MobilePortfolioProject';



const MobileProjectsView = () => {

  return (
    <div className='flex flex-col gap-10'>
       <MobileChatProject/>
       <MobileShopProject/>
       <MobilePortfolioProject/>
    </div>
  )
}

export default MobileProjectsView