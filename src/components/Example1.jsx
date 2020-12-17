import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Example1 = () => {
    const [resourceType, setResouceType] = useState('posts')
    const [api, setApi] = useState([])
    console.log('compo rendering');
    useEffect(() => {
        const fetchingData = async () => {
            setApi([])
            const fetching = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            setApi(await fetching.json())
        }
        fetchingData()
        // this return will run every time when state resourceType will change and it will run this return first to
        // do the cleanup and then will run the code above
        return () => {
            setResouceType('comments')
            console.log('component unmounted');
        }
    }, [resourceType])
    useEffect(() => {

    }, [])
    return (
        <div>
            <Link to='/'>Go back to home</Link>
            <button onClick={() => setResouceType('posts')}>posts</button>
            <button onClick={() => setResouceType('users')}>users</button>
            <button onClick={() => setResouceType('comments')}>COMMENTS</button>
            <h3> {resourceType}</h3>
            {api.length < 1 ? <p>Loading....</p> : api.map(data => <p key={data.id}>{JSON.stringify(data)}</p>)}
        </div>
    )
}
