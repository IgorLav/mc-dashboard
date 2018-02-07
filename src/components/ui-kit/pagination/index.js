import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const renderPages = (pagesCount, activePage, basePath) => pagesCount > 1 ? new Array(pagesCount).fill(0).map(
    (item, index) => (
        <Link key={index} to={`${basePath}/${index + 1}`}
              className={`pagination-item ${activePage === index + 1 ? 'active' : ''} `}>
            {index + 1}
        </Link>
    )
) : null;

const Pagination = ({pagesCount = 1, activePage = 1, basePath = ''}) => (
    <div className="pagination">
        {activePage > 1 && (
            <button className="pagination-item pager text-primary"><i className="icon icon-left"/></button>
        )}
        {renderPages(pagesCount, activePage, basePath)}
        {activePage !== pagesCount && (
            <button className="pagination-item pager text-primary"><i className="icon icon-right"/></button>
        )}
    </div>
);

export default Pagination;