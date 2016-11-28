import * as React from "react";
import {Movie} from "../../../api/movies/movie";

interface MovieListItemProps {
    movie: Movie;
}

export default class MovieListItem extends React.Component<MovieListItemProps, any> {

    render(): JSX.Element {
        const movie = this.props.movie;
        const style = {
            backgroundImage: `url(${this.props.movie.backdropUrl})`
        };

        return (
            <li className="movie-list__item" style={style}>
                <div className="movie-list__item_overlay">
                    <div className="movie-list__item_title">{movie.title}</div>
                    <div className="movie-list__item_overview">{movie.overview}</div>
                </div>
            </li>
        );
    }

}