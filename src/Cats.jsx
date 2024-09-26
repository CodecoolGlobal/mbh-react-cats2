import { useEffect, useState } from "react"

import './Cats.css';

export default function Cats() {
    const [count, setCount] = useState(1);
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchCat = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            const data = await response.json();
            // setCats(catsSoFar => [...catsSoFar, data[0]]);
            setCats(data);
        } catch (error) {
            console.log(error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {

        // fetchCat();
    }, [count]);

    useEffect(() => {
        /* async function x() {
            await fetch('https://api.thecatapi.com/v1/images/search');
            await fetch('https://api.thecatapi.com/v1/images/search');
            await fetch('https://api.thecatapi.com/v1/images/search');
        }

        x(); */

        fetchCat();

        console.log('Component mounted');
        const intervalId = setInterval(() => {
            setCount(oldValue => oldValue + 1);
        }, 10000);

        return () => {
            clearInterval(intervalId);
            console.log('Component unmounted');
        }
    }, []);

    return (
        <>
            <div className="Cats">
                <h1>Hány macskát kérsz?</h1>

                <div className="input-container">
                    <label htmlFor="count">Darabszám</label>
                    <br />
                    <input
                        type="number"
                        id="count"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                </div>

                <p style={{ margin: 10, height: 20 }}>
                    {isError && <>Error.</>}
                </p>

                <p style={{ margin: 10, height: 20 }}>
                    {isLoading && <>Loading next cat...</>}
                </p>

                <div className="cat-list">
                    {cats.map(cat => (
                        <div className="cat-container">
                            <img src={cat.url} style={{ margin: 10 }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}