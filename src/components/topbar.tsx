// TopBar.tsx
import React from 'react';
import SideBar from './sidebar';

const TopBar: React.FC = () => {
  return (
    <>

      <div className="flex  justify-between">

        <div className="ml-4 flex mt-[40px]">
          <input type="text" name="price" id="price" className="block w-[382px] h-[56px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="search" />
        </div>

        <div className="flex space-x-4 ml-auto mr-[40px] mt-[40px]">

          <div className=" p-2 rounded-full ">
            <img
              src="settings.png"
              alt="Settings"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>

          <div className="bg-gray p-2 rounded-full">
            <img
              src="bell.png"
              alt="Notification"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>

          <div className="text-white p-2 rounded-full">
            <img
              src="profile.png"
              alt="Profile"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>

          <div className="flex flex-col items-end  mt-4">
            <span className="text-sm">John Doe</span>
            <span className="text-xs">Person Title</span>
          </div>
        </div>
      </div>

      <div className="ml-4 mr-[40px] p-4 bg-white flex justify-content-between rounded-md">
        <div className="ml-4  ">
          <div className='text-base font-semibold'>Settings</div>
          <div className='text-sm'>Manage Your profiles</div>
        </div>

        <div className="flex  space-x-4 ml-auto mr-[40px]  ">

          <button className="rounded-lg flex h-[43px] 2-[138px] items-center bg-gray-200   py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <img src='company.png' className='h-4 w-4' />
            Company
          </button>

          <button className=" rounded-lg flex h-[43px] 2-[138px] items-center bg-gray-200   py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <img src='billing.png' className='h-4 w-4' />
            Billing
          </button>


          <button className="rounded-lg flex h-[43px] 2-[138px] items-center bg-[#007AE5] text-white   py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <img src='profilesidebar.png' className='h-4 w-4' />
            Profile
          </button>




        </div>

      </div>
    </>
  );
};

export default TopBar;
