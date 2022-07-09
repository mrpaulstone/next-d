import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns1 = [


  { field: 'name', headerName: 'Item', width: 630 },
  { field: 'vendor', headerName: 'vendor' },
  { field: 'type', headerName: 'type' },
  {
    field: 'price',
    headerName: 'price',
    type: 'float',
    width: 90,
  },
  { field: 'link', headerName: 'Link' },
  { field: 'id', headerName: 'ID' },
/*
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
*/
];

const dronedata = [
  {
    name: "CNHL G+Plus 4000mAh 22.2V 6S 70C Lipo Battery with XT90 Plug",
    price: "$110.64",
    type: "6s",
    vendor: "buzzfpv",
    id: "2buzzfpv6s"
  },
  {
    name: "CNHL Black Series 2000mAh 22.2V 6S 100C Lipo Battery with XT60 Plug",
    price: "$59.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "3buzzfpv6s"
  },
  {
    name: "CNHL ministar lipo 1800mah 22.2v 6s 120c Lipo Battery XT60",
    price: "$59.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "4buzzfpv6s"
  },
  {
    name: "Chinahobbyline CNHL Ministar 1250mAh 6s 70c Lipo Battery",
    price: "$35.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "5buzzfpv6s"
  },
  {
    name: "CNHL ministar 450mah 22.2v 6s 70c lipo battery with xt30 plug",
    price: "$22.98",
    type: "6s",
    vendor: "buzzfpv",
    id: "6buzzfpv6s"
  },
  {
    name: "CNHL G+PLUS 5000mAh 22.2V 6S 55C Lipo Battery with xt90 plug",
    price: "$117.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "7buzzfpv6s"
  },
  {
    name: "CNHL Speedy Pizza Drones 1200mAh 22.2V 6S 100C Lipo Battery – XT60",
    price: "$33.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "8buzzfpv6s"
  },
  {
    name: "Auline EX 1350mah 6S 22.2V 120C XT60 for 5inch FPV Racing",
    price: "$52.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "9buzzfpv6s"
  },
  {
    name: "CHINAHOBBYLINE CNHL MINISTAR 1300MAH 22.2V 6S 120C",
    price: "$45.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "10buzzfpv6s"
  },
  {
    name: "CNHL MiniStar 1500mAh 6S 22.2V 120C LiPo",
    price: "$49.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "11buzzfpv6s"
  },
  {
    name: "CNHL G+PLUS 3000mAh 22.2V 6S 70C XT90 Plug",
    price: "$77.00",
    type: "6s",
    vendor: "buzzfpv",
    id: "12buzzfpv6s"
  },
  {
    name: "Chinahobbyline CNHL Black Series 1500mah 22.2V 6S 100C Lipo Battery",
    price: "$51.95",
    type: "6s",
    vendor: "buzzfpv",
    id: "13buzzfpv6s"
  },
  {
    name: "CNHL BLACK SERIES 1100MAH 22.2V 6S 100C LIPO BATTERY",
    price: "$36.30",
    type: "6s",
    vendor: "buzzfpv",
    id: "14buzzfpv6s"
  },
  {
    name: "CNHL BLACK SERIES 1300MAH 22.2V 6S 100C LIPO BATTERY",
    price: "$45.10",
    type: "6s",
    vendor: "buzzfpv",
    id: "15buzzfpv6s"
  }
]





export default function DataTable() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={dronedata}
        columns={columns1}
        pageSize={25}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];