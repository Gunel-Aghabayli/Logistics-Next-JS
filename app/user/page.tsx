// import React from 'react'

// function page() {
//   return (
//     <div>
       

//     </div>
//   )
// }

// export default page
// pages/register.tsx



// app/register/page.tsx
'use client';
import React from 'react'

function page() {
  return (
    <div>
         <div className="flex flex-col mr-0 ml-0 font-[sans-serif] sm:h-screen p-4">
      <div className="max-4xl mx-auto border border-gray-300 rounded-2xl p-8 border-2   w-[50%]">
        <div className="text-center mb-12">
            <div className='flex flex-col justify-center'>
               <h1 className='text-blue-800 text-4xl font-semibold  text-center' >User</h1>
               <h5 className='text-gray-300'>Useri qeydiyyatdan keçirin</h5>
            </div>
         
        </div>
      
        <form>
          <div className="space-y-6 ml-16 mx-12">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Ad</label>
              <input name="ad" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]" placeholder="Ad" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Soyad</label>
              <input name="soyad" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="Soyad" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Şifrə</label>
              <input name="nömrə" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="********" />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Şifrəni təkrarla</label>
              <input type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="********" />
            </div>
            
          </div>

          <div className="!mt-12  w-[80%] ml-16">
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

