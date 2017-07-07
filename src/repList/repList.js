import React from "react";
import PropTypes from "prop-types";

import "./repList.css";

const RepList = ({ repList, repType, handleRepClick }) => {
    if(!repList.length) return <section className="rep-list rep-list--empty"/>;
    return (
        <section className="rep-list">
            <h2>
                List / <span className="rep-list__header--blue">{ repType === "senators" ? "Senators" : "Representatives" }</span>
            </h2>
            <table className="rep-list__table">
                <tbody>
                    <tr className="rep-list__row rep-list__row--header">
                        <th>Name</th>
                        <th>Party</th>
                    </tr>
                    { 
                        repList.map((rep, i) => {
                            return (
                                <tr key={ i } onClick={ handleRepClick } data-index={ i } className="rep-list__rep rep-list__row">
                                    <td>{ rep.name }</td>
                                    <td>{ rep.party.substring(0, 1).toUpperCase() }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    );
};

RepList.propTypes = {
    repList: PropTypes.array.isRequired,
    repType: PropTypes.string.isRequired,
    handleRepClick: PropTypes.func.isRequired
};

export default RepList;
