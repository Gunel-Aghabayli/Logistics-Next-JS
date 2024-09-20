"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import myImage from '../../public//image 11 (2).png';
import { Icon } from '@iconify/react';
import eyeCloseLine from '@iconify-icons/mingcute/eye-close-line'; 
import eyeOpenLine from '@iconify-icons/pepicons-pop/eye'; 
import { ReactElement } from 'react';
import { NextPage } from 'next'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
   <main>
   <div className="flex h-screen ">
         <div className="flex-1 flex items-center justify-center bg-gray-100 ">
           <Image src={myImage} alt="Logistics" className=" relative w-[780px] h-[730px]"  />
         </div>
         <div className="flex-1 flex flex-col justify-center items-center bg-white">
           <h1 className="text-48px font-bold text-customPurple mr-52">Daxil ol</h1>
           <p className="mb-10 text-customGray">Logistik təcrübəsini tamamlamağa xoş gəlmisiniz.</p>
           <form className="w-full max-w-sm">
             <div className="mb-4">
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
               <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
             </div>
             <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifrə:</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                name="password" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />
              <button 
                type="button" 
                onClick={handleTogglePassword} 
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
              >
                <Icon icon={showPassword ? eyeOpenLine : eyeCloseLine} className="h-5 w-5 text-gray-500 mt-7" />
              </button>
            </div>
             <div className="flex items-center justify-between mb-6">
               <label className="flex items-center">
                </label>
               <a href="/forgetPassword" className="text-sm text-indigo-600 hover:text-indigo-500">Şifrənizi unutmusunuz?</a>
             </div>
             <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bgBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10">Daxil ol</button>
           </form>
         </div>
       </div>
       
   </main>
  );

}

  Home.getLayout = function PageLayout(page: ReactElement) {
    return <>{page}</>;
  };