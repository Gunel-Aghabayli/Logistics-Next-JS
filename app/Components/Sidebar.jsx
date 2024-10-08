// import React from 'react'
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import Link from "next/link";
// import Image from 'next/image';
// import GridViewIcon from '@mui/icons-material/GridView';
// import BadgeIcon from '@mui/icons-material/Badge';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import LogoutIcon from '@mui/icons-material/Logout';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import myImage from '../public/image 19 (2).png'
// import profile from '../public/Ellipse 11.jpg'
// const inter = Inter({ subsets: ["latin"] });

// function Sidebar() {
//   return (
//     <div>
//     <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//           <span className="sr-only">Open sidebar</span>
//           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//           </svg>
//         </button>

//         <aside id="default-sidebar" className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
//           {/* bg color */}
//           <div className="h-full bg-white px-3 py-4 overflow-y-auto">
//             <ul className="space-y-2 font-medium">
//               <li>
//                 <a href="" className="flex items-center p-2 text-gray-900 rounded-lg group">
//                   <Image
//                     src={myImage}
//                     width={160}
//                     height={30}
//                     className="mb-4"
//                   />
//                 </a>
//               </li>
//               <li>
//                 <Link href={"/panel"} className="flex items-center p-2 rounded-lg group">
//                   <GridViewIcon className="text-gray-400" />
//                   <span className="ms-3 text-black">İdarə paneli</span>
               
//                 </Link>
//               </li>
//               <li>
//                 <a href="/drivers" className="flex items-center p-2 rounded-lg group">
//                   <BadgeIcon className="text-gray-400" />
//                   <span className="flex-1 ms-3 text-black">Sürücülər</span>
//                 </a>
//               </li>
//               <li>
//                 <Link href={"/transport"} className="flex items-center p-2 rounded-lg group">
//                   <LocalShippingIcon className="text-gray-400" />
//                   <span className="flex-1 ms-3 text-black">Nəqliyyat</span>
//                 </Link>
//               </li>
//               <li>
//                 <a href="/orders" className="flex items-center p-2 rounded-lg group">
//                   <TakeoutDiningIcon className="text-gray-400" />
//                   <span className="flex-1 ms-3 text-black">Sifarişlər</span>
//                 </a>
//               </li>
              
//               <li>
//                 <Link href={"/user"} className="flex items-center p-2 text-gray-900 rounded-lg group">
//                   <AccountBoxIcon className="text-gray-400" />
//                   <span className="flex-1 ms-3 text-black">User</span>
//                 </Link>
//               </li>
//             </ul>
//             <a href="/login" className="absolute bottom-8 left-16 bg-blue-500 rounded-3xl p-3 text-white">
//               <LogoutIcon/>
//             </a>
//           </div>
//         </aside>

//         <div className="sm:ml-64">
//           <div>
//            <nav className="bg-white border-gray-200">
//               <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" className="flex-col justify-start">
//                   <span className="self-center text-3xl mb-3 text-[#2e2e9c] font-semibold whitespace-nowrap ">Sürücülər</span>
//                   <h6 className="text-[14px] text-gray-400">Sürücülərin qeydiyyatı</h6>
//                 </a> 
//                 <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//                   <span className="sr-only">Open main menu</span>
//                   <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                   </svg>
//                 </button>
//                 <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbar-default">
//                   <NotificationsNoneIcon className="mr-4" sx={{ fontSize: 30, color: "#a1a1a1" }} />
//                   <Image src={profile} width={40} height={40} className="w-10 h-10 rounded-full"  alt="Rounded avatar"/>
//                 </div>
//               </div>
//             </nav>

//             {children}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Sidebar