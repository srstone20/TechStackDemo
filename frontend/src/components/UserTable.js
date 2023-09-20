import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';

const UserTable = (props) => {
    const data = props.names;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.user_id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default UserTable;
