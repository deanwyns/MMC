import * as React from "react";
import {Movie} from "../../../api/movies/movie";
import {MoviesComponentContext} from "../MoviesComponent";
import {MovieMethods} from "../../../api/movies/methods";

interface MoviePosterProps {
    movie: Movie;
    added: boolean;
    className: string;
}

interface MoviePosterState {
    added: boolean;
}

export default class MoviePoster extends React.Component<MoviePosterProps, MoviePosterState> {

    context: MoviesComponentContext;

    static contextTypes = {
        showAddAction: React.PropTypes.bool,
        showRemoveAction: React.PropTypes.bool,
        localCollection: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {added: this.props.added};
    }

    saveMovie(): void {
        let movie = this.props.movie;
        MovieMethods.insert.call({movie});
        this.setState({added: true});
    }

    removeMovie(): void {
        let movie = this.props.movie;
        MovieMethods.remove.call({movieId: movie._id});
        this.setState({added: false});
    }

    renderActions() {
        let elements: JSX.Element[] = [];

        if (this.context.showAddAction && !this.state.added) {
            elements.push(
                <span onClick={this.saveMovie.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i></span>
            );
        }

        if (this.state.added) {
            elements.push(
                <span><i className="fa fa-check" aria-hidden="true"></i></span>
            );

            if (this.context.showRemoveAction) {
                elements.push(
                    <span onClick={this.removeMovie.bind(this)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                );
            }
        }

        return elements;
    }

    render(): JSX.Element {
        const movie = this.props.movie;

        let style = {
            backgroundImage: `url(${movie.posterUrl})`
        };

        return (
            <div className={this.props.className}>
                <div style={style} className="movie-poster"></div>
                <div className="movie-grid__item_description">
                    <div className="movie-poster__actions">
                        {this.renderActions()}
                    </div>
                    <span>{movie.title}</span>
                </div>
            </div>
        );
    }

}