'use client'
import React from 'react'
import Link from 'next/link'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import StoreIcon from '@mui/icons-material/Store';
import Image from 'next/image'
import mainImage from "../../public/12334781_4936931 1.png"
import Rating from '@mui/material/Rating';
import customerImg from '../../public/Ellipse 77.jpg'
import { DataGrid } from '@mui/x-data-grid';
import smallİmg from '../../public/Ellipse 79.png'

interface Row {
  id: number;
  name: string;
  track: string;
  status: string;
  sent:''
  arrived:any;
}

const initialRows: Row[] = [
  { id: 1, name: 'Murad Kərimov', track: 'BHL332499', status:'Yoldadır',sent:'',arrived: 0o234 },
  { id: 2, name: 'Kənan Məmmədov', track: 'BHL332499' , status:'Çatdırılıb' ,sent:'' ,arrived: 0o234},
  { id: 3, name: 'Murad Kərimov', track: 'BHL332499' , status:'Yoldadır' ,sent:'' ,arrived: 0o234},
  { id: 4, name: 'Murad Kərimov', track: 'BHL332499' , status:'Yoldadır',sent:'' ,arrived: 0o234},
  { id: 5, name: 'Kənan Məmmədov', track: 'BHL332499' , status:'Yoldadır' ,sent:'' ,arrived: 0o234},
  { id: 6, name: 'Kənan Məmmədov', track: 'BHL332499' , status:'Yoldadır',sent:'' ,arrived:0o234 }
];

function page() {
  const [rows, setRows] = React.useState<Row[]>(initialRows);
  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
   
      setRows(initialRows);
      setIsLoading(false);
    }, 1000);
  }, []);

    return (
      <div className='   w-11/12  m-auto grid grid-cols-2 gap-20 justify-center align-center flex-wrap mt-10 ' >
       <div className='w-[600px]   '>
          {/* Xoş gəlmisiz start */}
        <div className='relative shadow-md text-gray-300 text-opacity-25  w-full mb-7 p-[5%] rounded-lg flex justify-between bg-[#5252AD]'>
<div className='grid grid-cols-2'>
  <div className='w-[300px]  '>
  <h1 className='text-white font-semibold text-[23px] mb-4'>Xoş gəlmisiz !</h1>
  <p className='text-[#FFCC76] font-semibold text-[16px] mb-2'>5 yeni bildirişiniz var</p>
  <Link href={"href"} className='text-white '>Bax</Link>
    </div>
  <Image src={mainImage} width='210' height='210' className='absolute right-0 bottom-1'/>
  </div>
  
  
        </div>
        <div className='  text-[20px] '>
        <div className="details-box-text  flex mb-5  ">
                              <h1 className='text-[#ECB354] font-medium '>Sifariş detalları</h1>
                          </div>
                          <div className="details-boxes flex justify-between items-center w-full   ">
                              <div className="  flex shadow-md text-gray-300 text-opacity-25 items-center p-3 justify-between bg-white w-[31%] rounded">
                                 {/* icon elave ele */}
                                  <div className="details-text grid grid-cols-2 justify-items-center">
                                    <div className='bg-gray-100 h-[48px] p-2 rounded-md'>
                                  <ListAltRoundedIcon color='primary'/>
                                  </div>
                                  <div>
                                      <h2 className='font-semibold text-xl text-[#4b4b4b]'>20</h2>
                                      <p className='w-[100px] text-sm text-[#C2C2C2]'>Ümumi sifariş</p>
                                  </div>
                                  </div>
                              </div>
                              <div className="flex shadow-md text-gray-300 text-opacity-25 items-center p-3 justify-between bg-white w-[31%] rounded">
                                   {/* icon elave ele */}
                                  <div className="details-text grid grid-cols-2 justify-items-center gap-8">
                                    <div className='bg-gray-100 h-[48px] p-2 rounded-md'>
                                  <StoreIcon color="primary"/>
                                  </div>
                                  <div>
                                      <h2 className='font-semibold text-xl text-[#4b4b4b]'>17</h2>
                                      <p className=' w-[140px] text-sm text-[#C2C2C2] pr-4'>Gözləyən sifariş</p>
                                  </div>
                                  </div>
                              </div>
                              <div className="flex shadow-md text-gray-300 text-opacity-25 items-center p-3 justify-between bg-white w-[31%] rounded">
                                  {/* icon elave ele */}
                                  <div className="details-text grid grid-cols-2 justify-items-center">
                                    <div className='bg-gray-100 h-[48px] p-2 rounded-md'>
                                 < DescriptionSharpIcon color='primary'/>
                                 </div>
                                 <div>
                                      <h2 className='font-semibold text-xl text-[#4b4b4b]'>50</h2>
                                      <p className=' w-[100px] text-sm text-[#C2C2C2]'>Göndərilib </p>
                                  </div>
                                  </div>
                              </div>
                          </div>
                        
                          <div className='  mt-8  '>
                      <h1 className='font-semibold'>Bugünki sifarişlər</h1>
                      </div>
                        <div  className=' mt-8 shadow-xl'>
            
           
      <div style={{ height: 400, width: '600px', fontSize: '10px' }}>
      <DataGrid 
                rows={rows}
                columns={[ 
                  { field: 'id', headerName: '', width: 30 },
                  {
                    field: 'name',
                    headerName: 'Müştəri',
                    width: 170,
                    renderCell: (params) => (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                          src={customerImg}
                          alt="Customer"
                          width={30}
                          height={30}
                          style={{ borderRadius: '50%', marginRight: '10px' }}
                        />
                        {params.value}
                      </div>
                    ),
                  },
                  { field: 'track', headerName: 'Tracking İD', width: 100 },
                  { field: 'status', headerName: 'Status', width: 90 },
                  { field: 'sent', headerName: 'Göndərilib', width: 90 },
                  { field: 'arrived', headerName: 'Çatdırılıb', width: 90 },
                ]}
                loading={isLoading}
                // pageSize={100} 
                disableColumnMenu 
                disableColumnFilter 
                disableColumnSelector 
                // disableSorting 
                hideFooter 
              />
            </div>
            </div>
                      
        </div>
       </div>
       
       
       <div>
      <div className='right  mb-46  '>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      </div> 
      <div className="w-[70%] max-w-md mx-auto bg-white rounded-lg shadow-md p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Order ID</h2>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
          Tracking
        </button>
      </div>
      <p className="text-gray-700">ID - AAA123456</p>

    
      <div className="flex items-center justify-between my-4">
       
        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
        <div className="flex-1 h-1 bg-blue-600"><p className='text-[10px] my-4 '>Sifariş alınıb</p></div>
        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>

      
        <div className="flex-1 h-1 bg-gray-400"><p className='text-[10px]  my-4'>Hazırlanır</p></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-400"><p className='text-[10px]  my-4'>Hazırdır</p></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-400"><p className='text-[10px]  my-4'>Yoldadır</p></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"><p className='text-[10px] my-5'>Çatdırılıb</p></div>
        </div>
     <div className="flex justify-between p-6">
        <div>
          <h3 className="text-gray-500">From</h3>
          <p className="text-blue-700 font-semibold">Ganja</p>
          <p className="text-gray-500">01 January 2024</p>
        </div>
        <div>
          <h3 className="text-gray-500">To</h3>
          <p className="text-blue-700 font-semibold">Baku</p>
          <p className="text-gray-500">05 January 2024</p>
        </div>
      </div>
      </div>    
      <div className='w-[70%] max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-10 grid grid-cols-2'>
        <Image src={customerImg} />
     <div className='customer-text'>
      
    <h1 className='font-semibold text-[#181818]'>Murad Kərimov</h1>
    <p className='text-gray-300' >Müstərini qiymətləndir</p>
    <div className=' flex justify-between items-center w-full mt-4'>
    <Rating name="size-large" defaultValue={2} size="large" />
     </div>
     </div>
     </div> 
          </div>
         </div>
    )
  }

export default page