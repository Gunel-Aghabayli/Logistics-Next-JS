// import React from 'react';

// const DataTable: React.FC = () => {
//   const rows = Array(15).fill({
//     id: '90-AA-999',
//     companyCar: true,
//     personalCar: true,
//     refrigerator: true,
//   });

//   return (
//     <div className="p-6">
//       <div className="mb-4 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Maşın axtarışı"
//           className="px-4 py-2 border rounded-md w-64"
//         />
//         <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
//           Qeydiyyatdan keç
//         </button>
//       </div>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2">No</th>
//             <th className="py-2">D.Q.N.</th>
//             <th className="py-2">Şirkət maşını</th>
//             <th className="py-2">Şəxsi maşın</th>
//             <th className="py-2">Soyuducu</th>
//             <th className="py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-2 px-4 text-center">{String(index + 1).padStart(2, '0')}</td>
//               <td className="py-2 px-4 text-blue-500 cursor-pointer">{row.id}</td>
//               <td className="py-2 px-4 text-center">
//                 {row.companyCar ? (
//                   <span className="text-green-500">●</span>
//                 ) : (
//                   <span className="text-gray-300">●</span>
//                 )}
//               </td>
//               <td className="py-2 px-4 text-center">
//                 {row.personalCar ? (
//                   <span className="text-green-500">●</span>
//                 ) : (
//                   <span className="text-gray-300">●</span>
//                 )}
//               </td>
//               <td className="py-2 px-4 text-center">
//                 {row.refrigerator ? (
//                   <span className="text-green-500">●</span>
//                 ) : (
//                   <span className="text-gray-300">●</span>
//                 )}
//               </td>
//               <td className="py-2 px-4 text-center">
//                 <button className="text-blue-500 px-2">✏️</button>
//                 <button className="text-red-500 px-2">🗑️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center mt-4">
//         <nav className="inline-flex">
//           <button className="px-3 py-1 border rounded-l-md">‹</button>
//           {[...Array(20)].map((_, i) => (
//             <button key={i} className="px-3 py-1 border">
//               {i + 1}
//             </button>
//           ))}
//           <button className="px-3 py-1 border rounded-r-md">›</button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default DataTable;
"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Pagination from '@mui/material/Pagination';

interface Row {
  id: string;
  companyCar: boolean;
  personalCar: boolean;
  refrigerator: boolean;
}

const DataTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rows, setRows] = useState<Row[]>(
    Array(200).fill({
      id: '90-AA-999',
      companyCar: false,
      personalCar: false,
      refrigerator: false,
    })
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // For single row selection by index
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleCheckboxChange = (index: number, key: keyof Row) => {
    const newRows = [...rows];
    newRows[index] = {
      ...newRows[index],
      [key]: !(newRows[index][key] as boolean),
    };
    setRows(newRows);
  };

  const handleRowSelectionChange = (index: number) => {
    setSelectedIndex(prevSelectedIndex => (prevSelectedIndex === index ? null : index)); // Toggle selection by index
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditingId(rows[index].id);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const newRows = [...rows];
      newRows[editingIndex].id = editingId;
      setRows(newRows);
      setEditingIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handlePageChange = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const filteredRows = rows.filter((row) => row.id.includes(searchTerm));
  const paginatedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="p-6">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Maşın axtarışı"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md w-64"
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md"
          onClick={() => (window.location.href = '/register')}
        >
          Qeydiyyatdan keç
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 text-center">Select</th>
            <th className="py-2">No</th>
            <th className="py-2">D.Q.N.</th>
            <th className="py-2">Şirkət maşını</th>
            <th className="py-2">Şəxsi maşın</th>
            <th className="py-2">Soyuducu</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row, index) => (
            <tr key={index + (page - 1) * rowsPerPage} className="border-b">
              <td className="py-2 px-4 text-center">
                <input
                  type="checkbox"
                  checked={selectedIndex === index + (page - 1) * rowsPerPage} // Only one checkbox can be checked at a time by index
                  onChange={() => handleRowSelectionChange(index + (page - 1) * rowsPerPage)} // Toggle selection by index
                />
              </td>
              <td className="py-2 px-4 text-center">
                {String(index + 1 + (page - 1) * rowsPerPage).padStart(2, '0')}
              </td>
              <td className="py-2 px-4 text-blue-500 cursor-pointer">
                {editingIndex === index + (page - 1) * rowsPerPage ? (
                  <input
                    type="text"
                    value={editingId}
                    onChange={(e) => setEditingId(e.target.value)}
                    className="px-2 py-1 border rounded-md w-full"
                  />
                ) : (
                  row.id
                )}
              </td>
              <td className="py-2 px-4 text-center">
                <input
                  type="checkbox"
                  checked={row.companyCar}
                  onChange={() => handleCheckboxChange(index + (page - 1) * rowsPerPage, 'companyCar')}
                  className="rounded-full h-4 w-4 text-green-500 focus:ring-0 cursor-pointer"
                  style={{ accentColor: row.companyCar ? '#22c55e' : 'inherit' }}
                />
              </td>
              <td className="py-2 px-4 text-center">
                <input
                  type="checkbox"
                  checked={row.personalCar}
                  onChange={() => handleCheckboxChange(index + (page - 1) * rowsPerPage, 'personalCar')}
                  className="rounded-full h-4 w-4 text-green-500 focus:ring-0 cursor-pointer"
                  style={{ accentColor: row.personalCar ? '#22c55e' : 'inherit' }}
                />
              </td>
              <td className="py-2 px-4 text-center">
                <input
                  type="checkbox"
                  checked={row.refrigerator}
                  onChange={() => handleCheckboxChange(index + (page - 1) * rowsPerPage, 'refrigerator')}
                  className="rounded-full h-4 w-4 text-green-500 focus:ring-0 cursor-pointer"
                  style={{ accentColor: row.refrigerator ? '#22c55e' : 'inherit' }}
                />
              </td>
              <td className="py-2 px-4 text-center">
                {editingIndex === index + (page - 1) * rowsPerPage ? (
                  <>
                    <button
                      className="text-green-500 px-2"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="text-gray-500 px-2"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="text-blue-500 px-2"
                      onClick={() => handleEditClick(index + (page - 1) * rowsPerPage)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-500 px-2"
                      onClick={() => setRows(rows.filter((_, i) => i !== index + (page - 1) * rowsPerPage))}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default DataTable;




