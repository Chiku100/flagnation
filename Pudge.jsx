import React from 'react'

export const Pudge = ({ image, country, population, region, capital,pass }) => {
    
    return (
        <section className='country_data' style={pass}>
            <img src={image} alt="country_img" />
            <div>
                <h2>{country}</h2>
                <p>Population: <span>{population}</span> </p>
                <p>Region: <span>{region}</span> </p>
                <p>Capital: <span>{capital}</span> </p>
            </div>

        </section>
    )
}
