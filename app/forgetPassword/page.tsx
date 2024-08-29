'use client';
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function page() {
  return (
    <div>
         <div className="flex flex-col mr-0 ml-0 font-[sans-serif] sm:h-screen p-4 ">
      <div className="max-4xl mx-auto border border-gray-300 rounded-2xl p-8 border-2   w-[50%]">
        <div className="text-center mb-12">
            <div className='flex flex-col justify-center'>
               <h1 className='text-blue-800 text-4xl font-semibold  text-center' >Şifrəni unutdum</h1>
               <h5 className='w-[400px] text-gray-300 ml-16'>Zəhmət olmasa link sıfırlama parolunu göndərmək seçimini seçin</h5>
            </div>
         </div>
      <form>
          <div className="space-y-6 ml-16 mx-12">
            <div className='flex gap-6 items-center border border-gray-300 p-4 '>
              <MailOutlineIcon className='border p-3 bg-gray-100 w-[50px] h-[50px] text-white rounded-3xl'/>
              <div>
                 <h3 className='text-gray-500'>Email ilə yenilə</h3>
                <p className='text-gray-400 text-sm'>Yeni link qeydiyyatdan keçmiş e-poçt ünvanınıza göndəriləcək</p>
              </div>
            </div>
            <div className='flex gap-6 items-center border border-gray-300 p-4'>
              <MailOutlineIcon className='border p-3 bg-gray-100 w-[50px] h-[50px] text-white rounded-3xl'/>
              <div>
                 <h3 className='text-gray-500'>Email ilə yenilə</h3>
                <p className='text-gray-400 text-sm'>Yeni link qeydiyyatdan keçmiş e-poçt ünvanınıza göndəriləcək</p>
              </div>
            </div>
        </div>
          <div className="mt-36 w-[80%] ml-16">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Qeydiyyat
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>
  )
}

export default page