import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import Axios from 'axios';

import '../style.css';

// const Autocomplete = ({ onChange }) => (
//     <input onFocus={alert} type="text" placeholder="value" onChange={onChange} />
// );

const App = () => {
    const [data, setData] = useState('');
    const [valueField, setValueField] = useState('');

    const fetchData = e => {
        setValueField(e.target.value);
        // console.log(e.target.value);
      Axios.post('/countries', { params: e.target.value || null})
          .then( res => setData(res.data) );
    };

    const renderItem =  () => (
        data.length !== 0 ?
        (<ul style={ {listStyleType: 'none'}}>
            {data.map((item, index) => (<li key={index}>{ item }</li>))}
        </ul>): <h3>Нет данных</h3>
    );

    const changeValue = e => {
        setValueField(e.target.value);
        setData('');
    };

    return (
      <div>
        <h1>Autocomplete</h1>
          {/*<input placeholder='country' onChange={getData}/>*/}
        <Autocomplete
            fetchData={fetchData}
            data={data}
            placeholder={'Country'}
            renderItem={renderItem}
            changeValue={changeValue}
            valueField={valueField}
            className={'autocomplete'}
        />
      </div>
  )

};


export default App;

// Autocomplete.PropTypes = {
//     fetchData: PropTypes.func.isRequired,
//     valueField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
//     textField: PropTypes.string.isRequired,
//     noOptionMessage: PropTypes.string,
//     className: PropTypes.string,
//     // menuClassName: PropTypes.string,
//     placeholder: PropTypes.string,
//     label: PropTypes.string,
//     // options: PropTypes.object.isRequired,
//     onChange: PropTypes.func.isRequired,
//     renderItem: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
// };
