import React from 'react';
import {Link} from 'react-router-dom';
import {OptionsMenu, Thumb} from '../../ui-kit';

const UserTableRow = (props) => {
    const user = props.user;
    return (
        <tr>
            <td className="basic-info-cell">
                <Thumb/>
                <div className="text">
                    <p className="user-name">{user.name} {user.lastname}</p>
                    <p className="text-plain">{user.position}</p>
                </div>
            </td>
            <td>
                <p className="text-plain">
                    <i className="icon icon-clock"/>
                    <span className="time">20 minutes ago</span>
                </p>
            </td>
            <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
            </td>
            <td>
                <a href={`tel:${user.phone}`}>{user.phone}</a>
            </td>
            <td className="options-cell">
                <OptionsMenu>

                </OptionsMenu>
            </td>
        </tr>
    );
};

export default UserTableRow;