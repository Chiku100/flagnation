import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
export const Header = ({ dark, state, setState, white }) => {
    function toggler() {
        setState(prev => !prev)
        localStorage.setItem("states",JSON.stringify(state) )
    }
    return (
        <header style={state ? dark : white}>
            <h1>Where in the world?</h1>
            <button style={state ? dark : white} onClick={toggler}><FontAwesomeIcon className="iconmoon" icon={faMoon} style={!state ? { color: "#000" } : { color: "hsl(0, 0%, 100%)" }} />Dark Mode</button>
        </header >
    )
}