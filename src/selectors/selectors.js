import React from "react";
import PropTypes from "prop-types";
import "./selectors.css";
import statesJson from "./states.json";

const Selectors = ({ submitFormHandler, selectChangeHandler, representativeType, selectedState }) => {
    return (
        <section className="selectors">
            <form onSubmit={ submitFormHandler }>
                <label htmlFor="select--representative">Representative Type</label>
                <select
                    name="representativeType"
                    id="select--representative"
                    onChange={ selectChangeHandler }
                    value={ representativeType }
                    className="selectors__select"
                >
                    <option value="representatives">Representative</option>
                    <option value="senators">Senator</option>
                </select>

                <label htmlFor="select--state">State</label>
                <select
                    name="selectedState"
                    id="select--state"
                    onChange={ selectChangeHandler }
                    value={ selectedState }
                    className="selectors__select"
                >
                    { Object.keys(statesJson).map((key, i) => <option value={ key } key={ i }>{ statesJson[key] }</option>)}
                </select>
                <button type="submit" className="selectors__submit">Find!</button>
            </form>
        </section>
    );
};

Selectors.propTypes = {
    submitFormHandler: PropTypes.func.isRequired,
    selectChangeHandler: PropTypes.func.isRequired,
    representativeType: PropTypes.string,
    selectedState: PropTypes.string
};

export default Selectors;