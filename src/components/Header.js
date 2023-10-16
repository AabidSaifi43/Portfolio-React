import React from 'react';
//images
import Logo from '../assets/logo4.png';

const Header = () => {
  return <div className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'><img src={Logo} alt='' /></a>
        {/* button */}
        <a href='#contact'><button className='btn btn-sm'>Work with me</button></a>
      </div>
    </div>
  </div>;
};

export default Header;
