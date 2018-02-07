import React from 'react';
import data from "./data";
import UsersTable from "../../components/users-table";

class Users extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">Users (128)</h1>
                <UsersTable users={data.users}/>
            </div>
        );
    }
}

export default Users;