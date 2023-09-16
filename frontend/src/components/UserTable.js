import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table'

const UserTable = (props) => {
    const data = props.names;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {
                            Object.keys(data).map((key, index) => (
                                <p key={index}>{key}</p>
                            ))
                        }
                    </td>
                    <td>
                        {
                            Object.keys(data).map((key, index) => (
                                <p key={index}>{data[key]}</p>
                            ))
                        }
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default UserTable;