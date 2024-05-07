import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Table from "react-bootstrap/Table";
import { data } from "./data.js";

function App() {
  const [searchWord, setSearchWord] = useState('');

  // Filter data based on searchWord
  const filteredData = data.filter(entry => {
    const searchText = searchWord.toLowerCase();
    return (
      entry.first_name.toLowerCase().includes(searchText) ||
      entry.last_name.toLowerCase().includes(searchText) ||
      entry.email.toLowerCase().includes(searchText) ||
      entry.phone.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <h1 style={{ textAlign: "center", width: "50%", margin: "10px auto" }}>Contact Keeper</h1>

      <Form style={{ width: "70%", margin: "10px auto" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Search Contacts"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </Form.Group>
      </Form>

      <div style={{ width: "70%", margin: "10px auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.first_name}</td>
                <td>{entry.last_name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
