import React from "react";
import PropTypes from "prop-types";

import "./repInfo.css";

const RepInfo = ({ rep }) => {
    if(!Object.keys(rep).length) return <section className="rep-info rep-info--empty"/>;
    const nameArr = rep.name.split(" ");
    const firstName = nameArr.splice(0,1)[0];
    const lastName = nameArr.join(" ");
    return (
        <section className="rep-info">
            <h2>Info</h2>
            <div className="rep-info__item">{ firstName }</div>
            <div className="rep-info__item">{ lastName }</div>
            <div className="rep-info__item">{ rep.district ? rep.district : "\u00a0" }</div>
            <div className="rep-info__item">{ rep.phone }</div>
            <div className="rep-info__item">{ rep.office }</div>
        </section>
    );
};

RepInfo.propTypes = {
    rep: PropTypes.object.isRequired
};

export default RepInfo;