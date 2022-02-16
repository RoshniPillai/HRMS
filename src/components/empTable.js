import { DataGrid } from "@material-ui/data-grid";

export default function empTable() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        //checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

const columns = [
  { field: "id", headerName: "Employee Number", flex: 1 },
  { field: "employeeName", headerName: "Employee Name", flex: 1 },
  { field: "position", headerName: "Position", flex: 1 },
  { field: "workLocation", headerName: "Work Location", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  {
    field: "section",
    headerName: "section",
    flex: 1
  }
];

const rows = [
  {
    id: 1,
    employeeName: "Snow",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 35
  },
  {
    id: 2,
    employeeName: "Lannister",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 42
  },
  {
    id: 3,
    employeeName: "Lannister",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 45
  },
  {
    id: 4,
    employeeName: "Snow",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 35
  },
  {
    id: 5,
    employeeName: "Targaryen",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: null
  },
  {
    id: 6,
    employeeName: "Melisandre",
    position: null,
    workLocation: "abc",
    department: "IT",
    section: 150
  },
  {
    id: 7,
    employeeName: "Clifford",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 44
  },
  {
    id: 8,
    employeeName: "Frances",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 36
  },
  {
    id: 9,
    employeeName: "Roxie",
    position: "HR",
    workLocation: "abc",
    department: "IT",
    section: 65
  }
];
