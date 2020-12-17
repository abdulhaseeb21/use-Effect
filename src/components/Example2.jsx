import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Example2 = () => {
    const [resourceType, setResouceType] = useState('posts')
    const [api, setApi] = useState([])
    useEffect(() => {
        const fetchingData = async () => {
            const fetching = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            setApi(await fetching.json())
        }
        fetchingData()
        return () => {
            setApi([])
            console.log('resouce changed');
        }
    }, [resourceType])
    return (
        <div>
            <Link to='/'>Go back to home</Link>
            <button onClick={() => setResouceType('posts')}>posts</button>
            <button onClick={() => setResouceType('users')}>users</button>
            <button onClick={() => setResouceType('comments')}>comments</button>
            <h3> {resourceType}</h3>
            {api.length < 1 ? <p>Loading....</p> : api.map(data => <p key={data.id}>{JSON.stringify(data)}</p>)}

        </div>
    )
}
