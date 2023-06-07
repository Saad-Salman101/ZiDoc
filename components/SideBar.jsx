/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const sidebarStyle = {
    width: isOpen ? '300px' : '40px', // Adjust the width when open or closed
    transition: 'width 0.2s ease-in-out',
    backgroundColor: isOpen ? 'black' : 'transparent', // Set the background color to red when open, transparent when closed
  };

  const getContent = () => {
    if (!isOpen) {
      return (
<div className='bg-black text-white flex flex-col w-[40px] h-[100vh] justify-around items-start' onClick={handleSidebarToggle}>
  <div className=' h-0 mb-[-40px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase w-[80px]'>  &nbsp;  Products</div>
  </div>
  <div className='h-0 mb-[-10px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase w-[100px]'>  &nbsp; Solutions</div>
  </div>
  <div className=' mb-[-50px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px] uppercase  w-[120px] '>  &nbsp; Documentation</div>
  </div>
  <div className='h-0 mb-[-50px] border-t-2 border-golden w-full'>
  <div className='transform -rotate-90 origin-top-left text-[12px]  w-[100px] uppercase '> &nbsp;  Electronic <br/> &nbsp; &nbsp; signature</div>
  </div>
  <div className=' h-0 mb-[-30px] border-t-2 border-golden w-full'>
    <div className='transform -rotate-90 origin-top-left  pl-2 w-[100px] text-[12px] uppercase'>Industries</div>
  </div>
  <div className=' h-0  mb-[-60px] border-t-2 border-golden w-full'>
    <div className='transform -rotate-90 origin-top-left pl-2 w-[100px] text-[12px] uppercase'>Aes 256-bit encryption</div>
  </div>
  <div className='h-0  mb-[-60px] '>
    <div  className='transform -rotate-90 origin-top-left mb-0 w-[30px] text-[11px] uppercase' >Pricing</div>
  </div>        
</div>

      );
    }

    return null;
  };

  return (
    <div>
      {/* <button onClick={handleSidebarToggle}>Toggle Sidebar</button> */}
      <Drawer
        open={isOpen}
        onClose={handleOverlayClick}
        direction="left"
        style={sidebarStyle}
      >
        <div className='h-[100vh] flex flex-col items-start ml-2'>
          <div className='flex flex-col'>
        <img src='/assets/SideBarLogo.png' alt=''  className='h-[70px] w-[183px] mt-2 '/>
        <img src='/assets/Products.png' alt=''  className='h-[18px] w-[238px] mt-2'/>
        </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px]'> signature</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> signature</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'> Worlds most secure way to sign and send</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> e-witness</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'>witness and sign confidentail and high vakue agreements/contracts</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> identify verification</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'>working seamlessly with aes 256 bit encryption and zimo meet</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px]'> contracts</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> contract/agreement management</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'>organised, automated document work flows</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> document generation</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'>generate documents seamlessly through your dedicated portal</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> data security</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[1.5px] leading-4'>all signatures, contracts, agreements, documents and witness statements kept under aes 256-bit encryption for the duration of your membership</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px]'> history</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> doc.safe</div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'> search, view, download and share every single signature, contract, agreement, and document from your portal</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px]'> more</div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> payemnts </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'> agree, sign and make payment(s) in a single click</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> clickwraps </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'> capture consent with a single click</div>
            </div>
            <div>
            <div className='w-full uppercase text-[10px] text-white font-semibold text-left tracking-[2px]'> web forms </div>
              <div className='w-full uppercase text-[9px] text-gray-600 font-semibold text-left tracking-[2px]'> incorporate data collection and speed  up signing</div>
            </div>

            <div className='w-full uppercase text-[10px] text-white font-semibold text-right tracking-[2px] flex flex-row justify-end cursor-pointer'> all products <img src='/assets/SideBarRightArrow.png' alt='' className='ml-5' /> </div>


            </div>
            
            Sidebar Content</div>
      </Drawer>
      {getContent()}
    </div>
  );
};

export default Sidebar;
