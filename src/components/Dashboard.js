import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from "../API/Axios/MovieListApi"

const Dashboard = (props) => {
    const movies = useSelector(store => { return store })
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(loadMovies())
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            {JSON.stringify(movies)}
        </>
    )
}
export default Dashboard