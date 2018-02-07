import React from 'react';
import data from "./data";
import UsersTable from "../../components/users-table";
import Pagination from "../../components/ui-kit/pagination";
import './styles.scss';

class Users extends React.Component {
    render() {
        return (
            <div className="users-page">
                <h1 className="page-title">Users <span className="text-plain">(128)</span></h1>
                <UsersTable users={data.users}/>
                <Pagination pagesCount={10} activePage={1} basePath="/app/users"/>
            </div>
        );
    }
}

export default Users;