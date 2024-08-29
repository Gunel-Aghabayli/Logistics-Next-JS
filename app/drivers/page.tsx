// 'use client';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {
//   GridRowsProp,
//   GridRowModesModel,
//   GridRowModes,
//   DataGrid,
//   GridColDef,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridEventListener,
//   GridRowId,
//   GridRowModel,
//   GridRowEditStopReasons,
//   GridSlots,
// } from '@mui/x-data-grid';
// import { faker } from '@faker-js/faker';


// const roles = ['Market', 'Finance', 'Development'];

// const randomRole = () => {
//   return faker.helpers.arrayElement(roles);
// };


// const initialRows: GridRowsProp = [
//   {
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     age: faker.datatype.number({ min: 18, max: 60 }),
//     joinDate: faker.date.past(),
//     role: randomRole(),
//   },
//   {
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     age: faker.datatype.number({ min: 18, max: 60 }),
//     joinDate: faker.date.past(),
//     role: randomRole(),
//   },
//   {
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     age: faker.datatype.number({ min: 18, max: 60 }),
//     joinDate: faker.date.past(),
//     role: randomRole(),
//   },
//   {
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     age: faker.datatype.number({ min: 18, max: 60 }),
//     joinDate: faker.date.past(),
//     role: randomRole(),
//   },
//   {
//     id: faker.datatype.uuid(),
//     name: faker.name.fullName(),
//     age: faker.datatype.number({ min: 18, max: 60 }),
//     joinDate: faker.date.past(),
//     role: randomRole(),
//   },
// ];

// interface EditToolbarProps {
//   setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
//   setRowModesModel: (
//     newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
//   ) => void;
// }

// function EditToolbar(props: EditToolbarProps) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = faker.datatype.uuid();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

//   const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id: GridRowId) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id: GridRowId) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow!.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow: GridRowModel) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns: GridColDef[] = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 80,
//       align: 'left',
//       headerAlign: 'left',
//       editable: true,
//     },
//     {
//       field: 'joinDate',
//       headerName: 'Join date',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'role',
//       headerName: 'Department',
//       width: 220,
//       editable: true,
//       type: 'singleSelect',
//       valueOptions: ['Market', 'Finance', 'Development'],
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: 500,
//         width: '100%',
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: EditToolbar as GridSlots['toolbar'],
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//     </Box>
//   );
// }
"use client";

import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, InputAdornment, Pagination } from '@mui/material';
import { useRouter } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@iconify-icon/react';
import editLineIcon from '@iconify-icons/mingcute/edit-line';


export default function DataTable() {
  const router = useRouter();
  const [rows, setRows] = useState<RowData[]>([]);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState<RowData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<RowData[]>([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; 

  type RowData = {
    id: number;
    ad: string;
    soyad: string;
    phone: string;
    email: string;
  };

  
  useEffect(() => {
    const sampleData: RowData[] = [
      { id: 1, ad: 'John', soyad: 'Doe', phone: '555-0100', email: 'john.doe@example.com' },
      { id: 2, ad: 'Jane', soyad: 'Smith', phone: '555-0101', email: 'jane.smith@example.com' },
      { id: 3, ad: 'Alice', soyad: 'Johnson', phone: '555-0102', email: 'alice.johnson@example.com' },
      { id: 4, ad: 'Bob', soyad: 'Brown', phone: '555-0103', email: 'bob.brown@example.com' },
      { id: 5, ad: 'Charlie', soyad: 'Williams', phone: '555-0104', email: 'charlie.williams@example.com' },
      { id: 6, ad: 'David', soyad: 'Jones', phone: '555-0105', email: 'david.jones@example.com' },
      { id: 7, ad: 'Emily', soyad: 'Garcia', phone: '555-0106', email: 'emily.garcia@example.com' },
      { id: 8, ad: 'Frank', soyad: 'Martinez', phone: '555-0107', email: 'frank.martinez@example.com' },
      { id: 9, ad: 'Grace', soyad: 'Hernandez', phone: '555-0108', email: 'grace.hernandez@example.com' },
      { id: 10, ad: 'Henry', soyad: 'Wilson', phone: '555-0109', email: 'henry.wilson@example.com' },
    ];

    setRows(sampleData);
    setFilteredRows(sampleData);  
  }, []);

  const handleDelete = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    setFilteredRows(updatedRows); 
  };

  const handleEdit = (row: RowData) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  const handleSave = () => {
    if (currentRow) {
      const updatedRows = rows.map(row =>
        row.id === currentRow.id ? currentRow : row
      );
      setRows(updatedRows);
      setFilteredRows(updatedRows); 
      handleClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (currentRow) {
      setCurrentRow({
        ...currentRow,
        [name]: value
      });
    }
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = rows.filter(row => 
      row.ad.toLowerCase().includes(term) ||
      row.soyad.toLowerCase().includes(term)
    );
    setFilteredRows(filtered);
    setPage(1); 
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 100, sortable: false, filterable: false, hideable: false, disableColumnMenu: true },
    { field: 'ad', headerName: 'Ad', width: 200, sortable: false, filterable: false, hideable: false, disableColumnMenu: true },
    { field: 'soyad', headerName: 'Soyad', width: 200, sortable: false, filterable: false, hideable: false, disableColumnMenu: true },
    { field: 'phone', headerName: 'Nömrə', width: 200, sortable: false, filterable: false, hideable: false, disableColumnMenu: true },
    { field: 'email', headerName: 'Email', width: 300, sortable: false, filterable: false, hideable: false, disableColumnMenu: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true, 
      renderCell: (params) => {
        const { row } = params;
        if (!row) return null;

        return (
          <>
            <Icon onClick={()=>handleEdit(row)} icon={editLineIcon} style={{ fontSize: '24px', color: 'blue' }} />
            <Icon onClick={()=>handleDelete(row.id)} icon="material-symbols:delete-outline" style={{ fontSize: '24px', color: 'red' }} />
          </>
        );
      },
    },
  ];

 
  const paginatedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div style={{ height: 590, width: '100%'}}>
      <div style={{ display: 'flex', marginBottom: 25, marginTop:25, height:"40px"}}>
      <TextField 
  name="search"
  placeholder="Search Ad or Soyad"
  value={searchTerm}
  onChange={handleSearchTermChange}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
    style: {
      height: '40px', 
      padding: '2',  
      fontSize: '14px' 
    }
  }}
  style={{
    height: '30px',  
    fontSize: '14px'  
  }}
/>
    <Button variant="contained" color="primary" onClick={() => router.push('/driversRegister')} style={{ marginLeft: '780px', width:'200px',textTransform: 'capitalize' }}>
          Qeydiyyatdan keç
        </Button>
      </div>
      <DataGrid
        rows={paginatedRows}
        columns={columns}
        checkboxSelection
        hideFooter
      />
      <Pagination
        count={Math.ceil(filteredRows.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}
      />

     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          {currentRow && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="ad"
                label="Ad"
                type="text"
                fullWidth
                value={currentRow.ad}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="soyad"
                label="Soyad"
                type="text"
                fullWidth
                value={currentRow.soyad}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="phone"
                label="Nömrə"
                type="text"
                fullWidth
                value={currentRow.phone}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                value={currentRow.email}
                onChange={handleChange}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}