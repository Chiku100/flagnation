import React, { useEffect } from 'react'
import { Link, redirect } from "react-router-dom"
import data from "../../data.json"
import { useParams,useSearchParams,useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react'
import { myData } from '../MyContext';
export const Nation = ({ dark, state, white }) => {
  const { id } = useParams()
  const { formData } = useContext(myData) 
  const desh = data.find((lol) => lol.name === id) || data
  console.log(id);

  const navigate=useNavigate()
  let final = []

  try {
    let ind = desh.borders?.length || 1
    if (desh.borders.length !== 0) {
      for (let index = 0; index < ind; index++) {
        const uma = data.filter((lol) => {
          return lol.alpha3Code === desh.borders[index]
        })

        final = [...final, uma[0]?.name || "no data"]
      }
    }
  } catch (error) {
    console.log(error);
  }





  return (
    <section className='page'>
      <button onClick={()=>navigate(-1)} style={state ? dark : null} className="back"><FontAwesomeIcon icon={faArrowLeft} />Back</button>
      <div className='container'>
        <div><img src={desh.flag} alt="country_img" /></div>
        <div className='information'>
          <h1>{desh.name}</h1>
          <div className='box'>
            <div>
              <p>Native name:<span> {desh.nativeName}</span></p>
              <p>population:<span>{desh.population}</span> </p>
              <p>region: <span>{desh.region}</span></p>
              <p>sub region: <span>{desh.subregion}</span></p>
              <p>capital:<span>{desh.capital}</span> </p>
            </div>

            <div><p>top level domain:<span>{desh.topLevelDomain}</span> </p>
              <p>currencies:<span>{desh.currencies?.name}</span> </p>
              <p>langauges: {desh.languages?desh.languages.map((lol) => <span key={lol.name}>{lol.name}</span>):"no data"}</p>
            </div>
          </div>

          <div className='border'>
            <b>Border Countries:</b>
            <div className='border_data' >
              {desh.borders ? final.map((lol) => {

                return <div style={{ backgroundColor: state ? " hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)" }} key={lol} className='mini'>{lol}</div>
              }) : "Not sharing border"}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
