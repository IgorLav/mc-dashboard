import React from 'react';
import "./styles.scss";

const Thumb = (props) => (
    <div className="thumb">
        { props.image ? <img src="" alt="" className="img-fluid"/> : <span className="initials">sd</span>}
    </div>
);

export default Thumb;