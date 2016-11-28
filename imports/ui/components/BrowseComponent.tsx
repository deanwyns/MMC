import * as React from "react";

import {Movie} from "../../api/movies/movie";
import {ExternalMovies} from "../../api/external_movies/external_movie";
import {FeaturedMoviesContainer} from "../containers/FeaturedMoviesContainer";

export interface BrowseComponentState {
    search: string;
    movies: Movie[];
}

export default class BrowseComponent extends React.Component<any, BrowseComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            search: undefined,
            movies: []
        };
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            Meteor.subscribe("externalMovies.search", this.state.search, 1);
            console.log(ExternalMovies.find().fetch());
            this.setState({
                movies: ExternalMovies.find().fetch(),
                search: this.state.search
            })
        }
    }

    handleChange(event) {
        const text = event.target.value;
        if (!text) {
            this.setState({
                search: undefined,
                movies: this.state.movies
            });
        }

        this.setState({
            search: text,
            movies: this.state.movies
        });
    }

    render(): JSX.Element {
        return (
            <div className="full-width full-height">
                <FeaturedMoviesContainer />
            </div>
        );
    }

}