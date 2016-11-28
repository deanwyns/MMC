import * as React from "react";
import {Movie} from "../../../api/movies/movie";
import MovieListItem from "./MovieListItem";

interface MovieListProps {
    movies: Movie[];
}

export default class MovieList extends React.Component<MovieListProps, any> {

    renderMovies() {
        return this.props.movies.map((movie) => {
            return <MovieListItem key={movie._id} movie={movie} />
        });
    }

    render(): JSX.Element {
        return (
            <ul className="movie-list">
                {this.renderMovies()}
            </ul>
        );
    }

}