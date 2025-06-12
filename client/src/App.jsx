import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"

function App() {
    const [msg, setMsg] = useState()
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    const fetchData = async () => {
        try {
            const data = await axios.get(`http://localhost:5000`)
            setMsg(data.data.message)
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>Hello Docker ! it's harsh</h1>
            <p>{msg}</p>
        </>
    )
}

export default App
