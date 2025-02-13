import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const userState = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.app);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {userState.users.length > 0 ? (
            userState.users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.number}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>
      {loading ? <p>Loading...</p> : ""}
    </div>
  );
}
