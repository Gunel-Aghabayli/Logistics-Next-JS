import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
     <div className="flex flex-col mr-0 ml-0 font-[sans-serif] sm:h-screen p-4">
      <div className="max-4xl mx-auto border border-gray-300 rounded-2xl p-8 border-2   w-[50%]">
        <div className="text-center mb-12">
            <div className='flex flex-col justify-center'>
               <h1 className='text-blue-800 text-4xl font-semibold  text-center' >Qeydiyyatdan keç</h1>
               <h5 className='text-gray-300'>Nəqliyyatı qeydiyyatdan keçirin</h5>
            </div>
         </div>
        <form>
          <div className="space-y-6 ml-16 mx-12">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Dövlət qeydiyyat maşını</label>
              <input name="ad" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]" placeholder="Placeholder" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Şirkət maşını</label>
              <select name="cars" id="cars" className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]'>
                  <option value="şirkət">Şirkət</option>
                  <option value="şəxsi">Şəxsi</option>
              </select>
            </div>
        <div>
              <label className="text-gray-800 text-sm mb-2 block">Soyuducu</label>
              <select name="cars" id="cars" className='text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]'>
                  <option value="şirkət"></option>
                  <option value="şəxsi"></option>
              </select>
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