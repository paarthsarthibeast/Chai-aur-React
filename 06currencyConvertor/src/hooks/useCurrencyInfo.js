import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-09-23/v1/currencies/${currency}.json`)
        .then((res) => res.json()) //json mostly takes data in string form.
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency]) // If there is a change in currency then we want to call it again so it is the Dependency. 
    console.log(data);
    return data
}

export default useCurrencyInfo;