import React from 'react';
import './Country.css'

const Country = (props) => {
    // Distracture
    const { name, capital, region } = props.country;
    return (
        <div className="country">
            <h4>This is : {name}</h4>
            <p>Capital: {capital} Region: {region}</p>
        </div>
    );
};

export default Country;