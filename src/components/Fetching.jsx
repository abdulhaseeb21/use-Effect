import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


export const Fetching = () => {
    console.log('useEffect fetching running ');
    const [data, setData] = useState({ title: 'Waiting for data' })
    const [isData, setIsData] = useState(false)
    // const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setData({ title: 'Waiting for data' })
        const fetchData = async () => {
            // setIsFetching(true)
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            let data = await response.json()
            setData(data)
            // setIsFetching(false)

        }
        fetchData()
    }, [isData])

    // In this example return will only run when component will unmount (tod do the cleanup) otherwise it'll never run
    useEffect(() => {
        return () => {
            setData({ title: 'Unmounted' })
            console.log('component fetching un mounts');
        }
    }, [])
    // if (isFetching) {
    //     return <div> Loading.......</div>
    // }
    return (
        <div>
            <h1>Hello Fetch </h1>
            <p>{data.title}</p>
            <button onClick={() => setIsData(!isData)}>Call Api Again</button>
            <Link to='/'>Go back to home</Link>

        </div>
    )
}
