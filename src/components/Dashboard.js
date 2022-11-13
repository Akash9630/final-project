import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from "../API/Axios/MovieListApi"
import MovieListItem from "./MovieListItem"

const Dashboard = () => {
    const movies = useSelector(store => { return store.task.movieList })
    const movieData = JSON.stringify(movies)
    console.log(JSON.stringify(movieData))

    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(loadMovies())
    }, [dispatcher])

    return (
        <>
            <h1>Dashboard</h1>
            {/* {JSON.stringify(movies)} */}
            {/* {movies.map((movie) => (<span key="movie.imdb_id">{movie.original_title}</span>)
            )} */}
            {/* task.movieList.original_title */}
            {movieData}

        </>
    )
}
export default Dashboard