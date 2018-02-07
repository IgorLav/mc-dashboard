import React from 'react';
import UserTableRow from './user-table-row';
import './styles.scss';

const renderRows = (users) => users.map(user => <UserTableRow key={user.id} user={user}/>);

const UsersTable = (props) => (
    <table className="users-table">
        <thead>
            <tr className="text-plain">
                <td className="basic-info-cell">Name</td>
                <td className="">Last activity</td>
                <td className="">Mail</td>
                <td className="">Phone</td>
                <td className="options-cell"/>
            </tr>
        </thead>

        <tbody>
            {renderRows(props.users)}
        </tbody>
    </table>
);

export default UsersTable;