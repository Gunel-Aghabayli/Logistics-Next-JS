// import React from 'react'
// import MapsUgcIcon from '@mui/icons-material/MapsUgc';
// import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
// interface CardProps {
//   number: string;
//   status: string;
//   departure: string;
//   arrival: string;
//   customer: string;
//   weight: string;
//   price: string;
//   driverName: string;
//   driverRole: string;
// }
// const CardComponent: React.FC<CardProps> = ({
//   number,
//   status,
//   departure,
//   arrival,
//   customer,
//   weight,
//   price,
//   driverName,
//   driverRole,
// }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-600 text-white p-6  w-[40%] " >
//       <div className="flex gap-[13%] items-center mb-4 ">
//         <div >
//           <p className="text-sm font-bold">Nömrə</p>
//           <p className="text-lg">{number}</p>
//         </div>
//         <div>
//           <p className="text-sm font-bold">Status</p>
//           <p
//             className={`text-lg ${
//               status === 'Yolda' ? 'text-yellow-300' : 'text-green-300'
//             }`}
//           >
//             {status}
//           </p>
//         </div>
        
//       </div>
// <div className='flex gap-[10px] justify-between '>
//       <div className="mb-4" >
//         <p className="text-sm font-bold mb-1">Gediş</p>
//         <p className="text-sm">{departure}</p>
//       </div>

//       <div className="mb-4">
//         <p className="text-sm font-bold mb-1">Gəliş</p>
//         <p className="text-sm">{arrival}</p>
//       </div>
// </div>
//       <div className="flex justify-between mb-4">
//         <div>
//           <p className="text-sm font-bold">Müştəri</p>
//           <p className="text-lg">{customer}</p>
//         </div>
//         <div>
//           <p className="text-sm font-bold">Çəki</p>
//           <p className="text-lg">{weight}</p>
//         </div>
//         <div>
//           <p className="text-sm font-bold">Qiymət</p>
//           <p className="text-lg">{price}</p>
//         </div>
//       </div>

//       <div className="flex items-center mt-4 ">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="Driver"
//           className="rounded-full w-10 h-10 mr-3"
//         />


//         <div>
//           <p className="font-bold">{driverName}</p>
//           <p className="text-sm">{driverRole}</p>
//         </div>
//         <div className='flex gap-[10px] ml-[95px]'>
//       <MapsUgcIcon/>
//       <PhoneOutlinedIcon/>
//       </div>
//       </div>
//     </div>
//   );
// };
// function page() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <CardComponent
//         number="KMC89203"
//         status="Yolda"
//         departure="09.02.24 09:00 AM"
//         arrival="01.03.24 11:30 PM"
//         customer="Sabir Aliyev"
//         weight="1.8 kg"
//         price="$200"
//         driverName="Mahir Quliyev"
//         driverRole="Sürücü"
      
//       />
    
    
//     </div>
//   )
// }

// export default page

"use client"
import React, { useEffect, useState } from 'react';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { ButtonGroup,Button, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'next/navigation';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import orderImg from '../../public/10613153_10098 1.png'


interface CardProps {
  number: string;
  status: string;
  departure: string;
  arrival: string;
  customer: string;
  weight: string;
  price: string;
  driverName: string;
  driverRole: string;
}

const CardComponent: React.FC<CardProps> = ({
  number,
  status,
  departure,
  arrival,
  customer,
  weight,
  price,
  driverName,
  driverRole,
}) => {
  
  return (
    
   <div className="max-w-sm rounded overflow-hidden shadow-lg  text-textColor p-6  m-4 bg-white">
    
    <div className="flex gap-[13%] items-center mb-4">
        <div>
          <p className="text-sm  text-headColor">Nömrə</p>
          <p className="text-lg">{number}</p>
        </div>
        <div>
          <p className="text-sm  text-headColor">Status</p>
          <p
            className={`text-lg ${
              status === 'Yolda' ? 'text-yellow-300' : 'text-green-300'
            }`}
          >
            {status}
          </p>
        </div>
       </div>
      <hr className='border-t-1 border-gray-400 -mx-6 p-2'/>
      <div className="flex gap-[10px] justify-between">
        <div className="mb-4">
          <p className="text-sm  mb-1 text-headColor">Gediş</p>
          
          <p className="text-sm">{departure}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm mb-1 text-headColor">Gəliş</p>
          <p className="text-sm">{arrival}</p>
        </div>
      </div>
      <hr className='border-t-1 border-gray-400 -mx-6 p-2'/>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm  text-headColor">Müştəri</p>
          <p className="text-lg">{customer}</p>
        </div>
        <div>
          <p className="text-sm text-headColor">Çəki</p>
          <p className="text-lg">{weight}</p>
        </div>
        <div>
          <p className="text-sm text-headColor">Qiymət</p>
          <p className="text-lg">{price}</p>
        </div>
      </div>
      <hr className='border-t-1 border-gray-400 -mx-6 height-[1px]'/>
      <div className="flex items-center mt-4">
        <img
          src="#"
          alt="Driver"
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-bold">{driverName}</p>
          <p className="text-sm text-headColor">{driverRole}</p>
        </div>
        <div className="flex gap-[10px] ml-auto">
          <MapsUgcIcon />
          <PhoneOutlinedIcon />
        </div>
      </div>
      
    </div>
  );
};

function Page() {
  const [cardData, setCardData] = useState<CardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const searchParams = useSearchParams();
  
  
  useEffect(() => {
   
    const fetchData = async () => {
      const data = [
        {
          number: 'KMC89203',
          status: 'Yolda',
          departure: '09.02.24 09:00 AM',
          arrival: '01.03.24 11:30 PM',
          customer: 'Sabir Aliyev',
          weight: '1.8 kg',
          price: '$200',
          driverName: 'Mahir Quliyev',
          driverRole: 'Sürücü',
        },
        {
          number: 'KMC89204',
          status: 'Tamamlandı',
          departure: '10.02.24 10:00 AM',
          arrival: '02.03.24 12:30 PM',
          customer: 'Orxan Məmmədov',
          weight: '2.5 kg',
          price: '$250',
          driverName: 'Rəşad Həsənov',
          driverRole: 'Sürücü',
        },
        {
          number: 'KMC89205',
          status: 'Yolda',
          departure: '11.02.24 11:00 AM',
          arrival: '03.03.24 01:30 PM',
          customer: 'Elçin Əliyev',
          weight: '3.2 kg',
          price: '$300',
          driverName: 'Əli Hüseynov',
          driverRole: 'Sürücü',
        },
        {
          number: 'KMC89206',
          status: 'Yolda',
          departure: '12.02.24 12:00 PM',
          arrival: '04.03.24 02:30 PM',
          customer: 'Namiq Həsənov',
          weight: '2.0 kg',
          price: '$220',
          driverName: 'Tural Əliyev',
          driverRole: 'Sürücü',
        },
        {
          number: 'KMC89207',
          status: 'Tamamlandı',
          departure: '13.02.24 01:00 PM',
          arrival: '05.03.24 03:30 PM',
          customer: 'Əli Hüseynov',
          weight: '3.0 kg',
          price: '$280',
          driverName: 'Kamran Məmmədov',
          driverRole: 'Sürücü',
        },
      ];

      setCardData(data); 
    };

    fetchData();
  }, []);
  const handleSearch = () => {
    const filteredData = cardData.filter((data) =>
      data.driverName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCardData(filteredData);
  };
  const [value, setValue] = useState('1'); 

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  


  return (
    <div>
      
      
      <div className='relative'>
        
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Hamısı" value="1" />
            <Tab label="Gözləmədə(20)" value="2" />
            <Tab label="Yola hazır(10)" value="3" />
            <Tab label="Yolda(19)" value='4'/>
            <Tab label="Çatdırılmış(9)" value='5'/>
          </TabList>
        </Box>
        <TabPanel value="1">
        <span className='border border-gray-200 rounded-sm absolute top-2 right-10'>
  <IconButton onClick={handleSearch} >
          <SearchIcon />
        </IconButton>
  <TextField 
            sx={{
              "& fieldset": { border: 'none' },
            }}
          variant="outlined"
          size="small"
          
          placeholder="Axtarış"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </span>
      
      <div className="grid  grid-cols-3 bg-gray-100 ">
      <div className="flex flex-col justify-center items-center max-w-sm rounded overflow-hidden shadow-lg  text-textColor p-6  m-4 bg-white">
      {/* Image */}
      <div className="mb-1">
        <Image
           src={orderImg}
          alt="Delivery"
          className="w-60 h-30"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Sifariş əlavə et</h2>
      <p className="text-gray-500 mb-6">Formanı doldurun və yeni bir paket əlavə edin</p>
      <button className="bg-blue-500 text-white rounded-full p-4 w-12 h-12 flex items-center justify-center hover:bg-blue-600">
        <span className="text-2xl">+</span>
      </button>
    </div>
     {cardData.map((data, index) => (
    <CardComponent
      key={index}
      number={data.number}
      status={data.status}
      departure={data.departure}
      arrival={data.arrival}
      customer={data.customer}
      weight={data.weight}
      price={data.price}
      driverName={data.driverName}
      driverRole={data.driverRole}
    />
  ))}
</div>
       </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
 
  {/* <span className='border border-gray-200 p-2 rounded-sm'>
  <IconButton onClick={handleSearch} >
          <SearchIcon />
        </IconButton>
  <TextField 
            sx={{
              "& fieldset": { border: 'none' },
            }}
          variant="outlined"
          size="small"
          
          placeholder="Axtarış"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </span> */}
      
    </div>
    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-wrap">
  
      {cardData.map((data, index) => (
        <CardComponent
          key={index}
          number={data.number}
          status={data.status}
          departure={data.departure}
          arrival={data.arrival}
          customer={data.customer}
          weight={data.weight}
          price={data.price}
          driverName={data.driverName}
          driverRole={data.driverRole}
        />
      ))}
    </div> */}
  
  </div>
);
}

export default Page;

