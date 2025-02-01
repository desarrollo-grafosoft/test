import { useState, useEffect } from "react";

function useFetch(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .finally(()=> setLoading(false))
        .catch((error)=> setError(true))

    }, [])

    return {data, loading, error}
}

export {useFetch}