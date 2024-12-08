import { useEffect, useState } from "react";

function getCurrentDate() {
    let date = new Date();
    let F_FullYear = date.getFullYear();
    let M_Month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let D_Date = String(date.getDate() - 1).padStart(2, '0');
    
    console.log(`${F_FullYear}-${M_Month}-${D_Date}`);
    return `${F_FullYear}-${M_Month}-${D_Date}`;
}

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});
    
    let x = getCurrentDate(); // Call Generate Date Function.

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${x}/v1/currencies/${currency}.json`)
            .then((res) => res.json()) //json mostly takes data in string form.
            .then((res) => setData(res[currency]))
            .catch((error) => console.error('Error fetching data:', error)); // Add error handling

    }, [currency]); // If there is a change in currency then we want to call it again so it is the Dependency. 

    console.log(data);
    return data;
}

export default useCurrencyInfo;
