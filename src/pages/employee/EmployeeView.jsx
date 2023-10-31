import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Employee() {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <DropdownButton id="dropdown-basic-button" title="Department">
            <Dropdown.Item>Sales</Dropdown.Item>
            <Dropdown.Item>Marketing</Dropdown.Item>
            <Dropdown.Item>Engineering</Dropdown.Item>
            <Dropdown.Item>Human Resources</Dropdown.Item>
            <Dropdown.Item>Legal</Dropdown.Item>
          </DropdownButton>
        </form>

        <button>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}
