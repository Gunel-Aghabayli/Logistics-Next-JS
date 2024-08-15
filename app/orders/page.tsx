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
   
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-600 text-white p-6 w-[40%] m-4">
      
      <div className="flex gap-[13%] items-center mb-4">
        <div>
          <p className="text-sm font-bold">Nömrə</p>
          <p className="text-lg">{number}</p>
        </div>
        <div>
          <p className="text-sm font-bold">Status</p>
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
          <p className="text-sm font-bold mb-1">Gediş</p>
          
          <p className="text-sm">{departure}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold mb-1">Gəliş</p>
          <p className="text-sm">{arrival}</p>
        </div>
      </div>
      <hr className='border-t-1 border-gray-400 -mx-6 p-2'/>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm font-bold">Müştəri</p>
          <p className="text-lg">{customer}</p>
        </div>
        <div>
          <p className="text-sm font-bold">Çəki</p>
          <p className="text-lg">{weight}</p>
        </div>
        <div>
          <p className="text-sm font-bold">Qiymət</p>
          <p className="text-lg">{price}</p>
        </div>
      </div>
      <hr className='border-t-1 border-gray-400 -mx-6 height-[1px]'/>
      <div className="flex items-center mt-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Driver"
          className="rounded-full w-10 h-10 mr-3"
        />
        <div>
          <p className="font-bold">{driverName}</p>
          <p className="text-sm">{driverRole}</p>
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

  useEffect(() => {
    // Simulate fetching 5 cards' data
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

      setCardData(data); // Set the card data
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-wrap">
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
  );
}

export default Page;

