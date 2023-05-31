import { createContext, useState, useEffect } from "react";
import country from "../data.json"
export const myData = createContext();
function Provider({ children }) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(country.slice(0, 20))
    const [loading, setLoading] = useState(true)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        setPage(array)
    }
    useEffect(() => {
        shuffleArray(page)
    }, [page])
    useEffect(() => {
        setData(country)
        setLoading(false)
    }, [])
    const [formData, setFormData] = useState({ search: "", filter: "" })
    return <myData.Provider value={{ formData, setFormData,data,page,loading }}>
        {children}
    </myData.Provider>
}
export default Provider