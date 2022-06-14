import { useState } from 'react'

function useFetch(url, setData) {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setIsLoading(true)
        setError(false);


        const callFetch = async () => {
            const response = await fetch(url)

            if (!response.ok) {
                const message = `An error has occurred while getting data: ${response.status}`;
                throw new Error(message);
            }
            const data = await response.json()
            setData(data)
            setIsLoading(false)
        }

        try {
            callFetch()
        } catch (error) {
            console.log(error)
            setError(true)
            setIsLoading(false)
        }
    }

    return { isLoading, error, fetchData }
}

export default useFetch