import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadMovies } from "../API/Axios/MovieListApi"
import MovieListItem from "./MovieListItem"

const Dashboard = () => {
    const movies = useSelector(store => {
        if (store.task.movieList?.Search) {
            return store.task.movieList.Search
        }
        else {
            return []
        }



    })

    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(loadMovies())
    }, [dispatcher])

    return (
        <>
            {movies?.map(item =>
                <MovieListItem
                    title={item.Title}
                    poster={item.Poster}
                    type={item.Type}
                    year={item.Year}
                />
            )
            }
        </>
    )
}
export default Dashboard

