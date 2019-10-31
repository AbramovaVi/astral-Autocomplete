import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Autocomplete = ({ data, fetchData, placeholder, changeValue, valueField, className, textField, noOptionMessage, options }) => {
    return(
        <div className={className}>
            <p>{textField}</p>
            <input placeholder={placeholder} value={valueField} onChange={ e => fetchData(e, options)}/>
            {
                data.length !== 0 ? (
                    <ul>
                        {data.map((item, index) => (<li key={index}><input value={item} onClick={changeValue} readOnly/></li>))}
                    </ul>
                ) : null
            }
                    {/*<ul><li><input value={noOptionMessage} readOnly className='input-disabled'/></li></ul>*/}
        </div>
    )
};

export default Autocomplete;

Autocomplete.propTypes = {
    fetchData: PropTypes.func.isRequired,
    valueField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    textField: PropTypes.string.isRequired,
    noOptionMessage: PropTypes.string,
    className: PropTypes.string,
    // menuClassName: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object.isRequired,
    changeValue: PropTypes.func.isRequired,
    // onChange: PropTypes.func.isRequired,
    renderItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
