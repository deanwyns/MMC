import * as React from "react";
import {Movie} from "../../api/movies/movie";
import MoviePosterGrid from "./movies/MoviePosterGrid";
import MovieList from "./movies/MovieList";
import ScrollableDiv from "./ScrollableDiv";
import GridListComponent from "./GridListComponent";

export interface MoviesComponentProps {
    movies: Movie[];

    showAddAction?: boolean;
    showRemoveAction?: boolean;
    localCollection: boolean;

    showSearch?: boolean;
}

interface MoviesComponentState {
    search: string;
}

export interface MoviesComponentContext {
    showAddAction?: boolean;
    showRemoveAction?: boolean;
    localCollection: boolean;
}

export default class MoviesComponent extends React.Component<MoviesComponentProps, MoviesComponentState> {

    context: MoviesComponentContext;

    static childContextTypes = {
        showAddAction: React.PropTypes.bool,
        showRemoveAction: React.PropTypes.bool,
        localCollection: React.PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            search: undefined
        };
    }

    getChildContext(): MoviesComponentContext {
        return {
            showAddAction: this.props.showAddAction,
            showRemoveAction: this.props.showRemoveAction,
            localCollection: this.props.localCollection
        }
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            //this.setState({search:event.})

        }
    }

    handleChange(event) {
        const text = event.target.value;
        if (!text) {
            this.setState({search: undefined});
        }

        this.setState({search: text});
    }

    getFilteredMovies(): Movie[] {
        let filteredMovies;
        if (this.state.search) {
            filteredMovies = this.props.movies.filter((movie) => {
                return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            });
        } else {
            filteredMovies = this.props.movies;
        }

        return filteredMovies;
    }

    getListContent(): JSX.Element {
        return (
            <MovieList movies={this.getFilteredMovies()}/>
        )
    }

    getGridContent(): JSX.Element {
        const gridProps: ResponsiveGridProps = {
            smallDevices: {
                itemsPerRow: 2,
                spaceBetween: "1rem"
            },
            mediumDevices: {
                itemsPerRow: 4,
                spaceBetween: "1rem"
            },
            largeDevices: {
                itemsPerRow: 6,
                spaceBetween: "2rem"
            }
        };

        return (
            <MoviePosterGrid movies={this.getFilteredMovies()} gridProps={gridProps} />
        )
    }

    render(): JSX.Element {
        return (
            <ScrollableDiv className="full-width full-height">
                { this.props.showSearch ?
                    <input type="text" placeholder="Zoeken..." onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} className="search-component" />
                    : "" }
                <GridListComponent gridContent={this.getGridContent()} listContent={this.getListContent()} />
            </ScrollableDiv>
        );
    }

}