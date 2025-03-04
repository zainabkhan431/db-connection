"use client"; 
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'city', headerName: 'City', width: 150 }
];

const rows = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30, city: 'Los Angeles' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 28, city: 'Chicago' },
  { id: 4, name: 'David', email: 'david@example.com', age: 35, city: 'Houston' },
  { id: 5, name: 'Emma', email: 'emma@example.com', age: 22, city: 'Miami' },
  { id: 6, name: 'Frank', email: 'frank@example.com', age: 29, city: 'San Francisco' },
  { id: 7, name: 'Grace', email: 'grace@example.com', age: 32, city: 'Seattle' },
  { id: 8, name: 'Henry', email: 'henry@example.com', age: 26, city: 'Boston' },
  { id: 9, name: 'Isla', email: 'isla@example.com', age: 24, city: 'Denver' },
  { id: 10, name: 'Jack', email: 'jack@example.com', age: 27, city: 'Phoenix' },
  { id: 11, name: 'Karen', email: 'karen@example.com', age: 33, city: 'Philadelphia' },
  { id: 12, name: 'Leo', email: 'leo@example.com', age: 31, city: 'Dallas' },
  { id: 13, name: 'Mia', email: 'mia@example.com', age: 23, city: 'San Diego' },
  { id: 14, name: 'Noah', email: 'noah@example.com', age: 30, city: 'Austin' },
  { id: 15, name: 'Olivia', email: 'olivia@example.com', age: 21, city: 'Atlanta' },
  { id: 16, name: 'Paul', email: 'paul@example.com', age: 36, city: 'Detroit' },
  { id: 17, name: 'Quinn', email: 'quinn@example.com', age: 29, city: 'Nashville' },
  { id: 18, name: 'Rachel', email: 'rachel@example.com', age: 34, city: 'Charlotte' },
  { id: 19, name: 'Sam', email: 'sam@example.com', age: 28, city: 'Portland' },
  { id: 20, name: 'Tina', email: 'tina@example.com', age: 26, city: 'Las Vegas' }
];

const DataTable = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
};

export default DataTable;
