// pages/dashboard.tsx
import SideBar from '@/components/sidebar';
import TopBar from '@/components/topbar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main content container */}
      <div className="flex flex-col w-full">
        {/* TopBar */}
        <TopBar />

        {/* Main content of the dashboard */}
        <div className=" mt-4 ml-4 mr-[40px] p-8 bg-white  rounded-md">
          <div className='mb-4'>
            <div className='text-base font-semibold'>Edit Profile</div>
            <div className='text-sm'>Manage Your profile settings</div>
          </div>

          <div className='flex justify-content-between '>

            <div className='h-[356px] border-[1px] w-[273px] items-center px-4 py-4'>
              <img className='h-[104px] w-[104px] ml-10' src='girl.png' />
              <div className='font-semibold text-[18px] mt-2 ml-8'>
                Theresa Webb
              </div>

              <div className='font-light text-base mt-2'>
                Shifti Technologies PTY. LTD.
              </div>

              <button className="w-[233px] bg-[#007AE5] text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded-lg">
                Upload
              </button>

              <button className="w-[233px] rounded-lg mt-4 w-full border border-gray text-gray-400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                Remove
              </button>
            </div>


            {/* form code */}
            <div className="w-full px-8 ">
              <form className="bg-white  rounded ">
                {/* divider */}
                <div className='border-t bg-[#EAEAEA]'>

                </div>

                <div className="mb-4 mt-4 flex ml-2">
                  <div className="w-full ">
                    <label className="block text-[#535655] text-base  mb-2" >
                      First Name
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username" type="text" />
                  </div>

                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Last Name
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>

                </div>

                <div className="mb-4 mt-4 flex ml-2">


                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Personal Id Number
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>


                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Date of Birth
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>

                </div>

                <div className="mb-4 mt-4 flex ml-2">

                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Email Address
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>

                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Phone Number
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>

                </div>


                <div className="mb-4 mt-4 flex ml-2">

                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Current Address
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>


                  <div className="ml-2 w-full">
                    <label className="block text-[#535655] text-base mb-2" >
                      Post Code
                    </label>
                    <input
                      className="h-[61px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password" type="password" />
                  </div>

                </div>

                <div className='flex justify-end'>
                  <button className=" bg-[#007AE5] w-[284px] text-white  py-2 px-4 rounded flex items-center justify-center rounded-lg">
                    Save Changes
                  </button>
                </div>

              </form>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
