import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class Autocomplete extends Component {
//
//
//     render() {
//         return (
//             <>
//
//             </>
//         )
//     }
// }

const Autocomplete = props => {
    const { data, fetchData, placeholder, changeValue, valueField, className } = props;
return(
    <div className={className}>
        <input placeholder={placeholder} value={valueField} onChange={fetchData}/>
        {
            data.length !== 0 ? (
                <ul style={ {listStyleType: 'none'}}>
                    {data.map((item, index) => (<li key={index}><input value={item} onClick={changeValue} readOnly/></li>))}
                </ul>
                ) : null
            }
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
    onChange: PropTypes.func.isRequired,
    renderItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
