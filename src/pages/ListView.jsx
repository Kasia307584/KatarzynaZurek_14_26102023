import { Link } from "react-router-dom";
import Table from "../components/DataTable";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export default function List() {
  const data = useSelector((state) => state.employeeTable);

  const columns = [
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Start Date",
      accessorKey: "startDate",
    },
    {
      header: "Department",
      accessorKey: "department",
    },
    {
      header: "Date of Birth",
      accessorKey: "dateOfBirth",
    },
    {
      header: "Street",
      accessorKey: "street",
    },
    {
      header: "City",
      accessorKey: "city",
    },
    {
      header: "State",
      accessorKey: "state",
    },
    {
      header: "Zip Code",
      accessorKey: "zipCode",
    },
  ];

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Table data={data} columns={columns} />
        <Link to="/" className="btn-link">
          <Button variant="outline-secondary">Home</Button>
        </Link>
      </div>
    </>
  );
}
