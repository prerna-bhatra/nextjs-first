// SideBar.tsx
import React from 'react';
import Link from 'next/link';

const SideBar: React.FC = () => {
    return (
        <div className="bg-white p-6 h-[950px]">
            <Link href="/">
                <img src='logo.png' className='w-[93.8px] h-[42px] mt-[6.85px]' />
            </Link>

            <input type="text" name="price" id="price" className="block w-[197px] h-[48px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="search" />

            <div className='border-t black mr-[-40px] ml-[-40px] mt-[20px]'></div>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/">
                <img src='dashboard.png' className='h-8 w-8 mr-4' />
                Dashboard
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/news">
                <img src='news.png' className='h-8 w-8 mr-4' />
                News
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/messenger">
                <img src='message.png' className='h-8 w-8 mr-4' />
                Messenger
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='calendarplus.png' className='h-8 w-8 mr-4' />
                Calendar
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='request.png' className='h-8 w-8 mr-4' />
                Leave Request
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='calendartimer.png' className='h-8 w-8 mr-4' />
                Shift Schedule
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='community.png' className='h-8 w-8 mr-4' />
                Community
            </Link>


            <div className='border-t black mr-[-40px] ml-[-40px] mt-[40px]'></div>


            <Link className="mt-[40px] flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='shifts.png' className='h-8 w-8 mr-4' />
                Shifts
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='leaves.png' className='h-8 w-8 mr-4' />
                Leaves
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='schedule.png' className='h-8 w-8 mr-4' />
                Schedule
            </Link>
            

            <div className='border-t black mr-[-40px] ml-[-40px] mt-[40px]'></div>


            <Link className="mt-[100px] flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='profilesidebar.png' className='h-8 w-8 mr-4' />
                Profile
            </Link>

            <Link className="mt-4 flex items-center mb-4 text-[#9BA1CC] hover:text-blue-500" href="/calendar">
                <img src='setting.png' className='h-8 w-8 mr-4' />
                Setting
            </Link>


        </div>
    );
};

export default SideBar;
