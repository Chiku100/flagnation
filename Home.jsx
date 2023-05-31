import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Pudge } from './Pudge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import country from "../../data.json"
import { useContext } from 'react'
import { myData } from '../MyContext';
export default function Home({ dark, state, white }) {
    const { formData, setFormData,data,page } = useContext(myData)
    const whiteelemStyle = { backgroundColor: "hsl(209, 23%, 22%)" }
    const darkelemStyle = {
        backgroundColor: "hsl(0, 0%, 100%)"
    }
    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    const handleSearch = data.filter((lol) => lol.name.toLowerCase().indexOf(formData.search.toLowerCase()) >= 0
    )
    const handleRegion = data.filter((lol) => lol.region.toLowerCase() == formData.filter.toLowerCase())

    const gg = formData.search !== "" && formData.filter !== "" ? handleRegion.filter((lol) => lol.name.toLowerCase().indexOf(formData.search.toLowerCase()) >= 0) :
        formData.search !== "" && formData.filter === "" ? handleSearch : formData.search === "" && formData.filter !== "" ? handleRegion : page

    const fp = gg.map((value) => {
            const route = formData.filter !== "" ? `${formData.filter}/${value.name}` : `${value.name}`
            return (<Link style={state ? dark : white} key={value.name} to={`/${route}`}>
                <Pudge pass={state ? whiteelemStyle : darkelemStyle} country={value.name} image={value.flag} population={value.population} region={value.region} capital={value.capital} /></Link>)
        })
    return (
        <>
            <div className='form'>
                <form action="post">
                    <div className="wrapper">
                        <FontAwesomeIcon className='icon' icon={faSearch} />
                        <input style={state ? { backgroundColor: "hsl(209, 23%, 22%)", color: "hsl(0, 0%, 100%)" } : { backgroundColor: "hsl(0, 0%, 100%)" }} name='search' onChange={handleChange} type='text' className="input" placeholder='Search for a country...'></input>
                    </div>

                    <select style={state ? dark : white} value={formData.filter} onChange={handleChange} name="filter" id="">
                        <option  value="filter">Filter by region</option>
                        <option value="asia">Asia </option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </form >
            </div >
            <section className='elements' style={state ? dark : white}>
                {fp}
            </section>
        </>
    )
}
