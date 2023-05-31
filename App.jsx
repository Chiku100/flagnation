import { useState, useContext, useEffect } from 'react'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import Home from './Home'
import { Nation } from '../Components/Nation'
import { myData } from '../MyContext'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
function App() {
  console.log(window.location.pathname);
  const { formData, loading } = useContext(myData)
  const [state, setState] = useState(localStorage.getItem("states"))

  const dark = {
    backgroundColor: "hsl(207, 26%, 17%)",
    color: "hsl(0, 0%, 100%)"
  }
  const white = {
    backgroundColor: "hsl(0, 0%, 98%)",
    color: "hsl(200, 15%, 8%)"
  }
  console.log(formData.filter)
  return (<article style={state ? dark : white}>
    <Header dark={dark} state={state} setState={setState} />

    <Routes>
      {loading && <Route path='/' element={<Loading />} />}
      <Route path='*' element={<Error />} />
      <Route path='/' element={<Home dark={dark} state={state} />} />
      <Route path={`/${formData.filter}`} element={<Home dark={dark} state={state} />} />
      {formData.filter === "" ? <Route path={`/:id`} element={<Nation dark={dark} white={white} state={state} />} /> : <Route path={`/${formData.filter}/:id`} element={<Nation dark={dark} white={white} state={state} />} />}
    </ Routes>
  </article>)
}
export default App
