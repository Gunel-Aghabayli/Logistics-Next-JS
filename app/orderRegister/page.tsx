import React from 'react'

function page() {
  return (
    <div>
      <div className="flex flex-col mr-0 ml-0 font-[sans-serif] sm:h-screen p-4">
      <div className="max-4xl mx-auto border border-gray-300 rounded-2xl p-8 border-2   w-[50%]">
        <div className="text-center mb-12">
            <div className='flex flex-col justify-center'>
               <h1 className='text-blue-800 text-4xl font-semibold  text-center' >Sifariş et</h1>
               <h5 className='text-gray-300'>Yeni sifariş əldə edin</h5>
            </div>
          
        </div>
      
        <form>
          <div className="space-y-6 ml-16 mx-12">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Sifarişin nömrəsi</label>
              <input type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]" placeholder="Sifarişin nömrəsi" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Çıxış tarixi</label>
              <input  type="date" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="Çıxış tarixi" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Çatdırılma tarixi</label>
              <input type="date" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="Telefon" />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Sifarişi qəbul edən müstəri</label>
              <input  type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500  w-[80%]" placeholder="Müştəri" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Çəki</label>
              <input type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]" placeholder="Select" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Qiymət</label>
              <input  type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 w-[80%]" placeholder="Select" />
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