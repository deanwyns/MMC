import * as React from "react";
import {Movie, Movies} from "../../../api/movies/movie";
import MoviePoster from "./MoviePoster";
import {Grid, Col, Row} from "react-bootstrap";
import {MoviesComponentContext} from "../MoviesComponent";

interface MoviePosterGridProps {
    movies: Movie[];

    gridProps: ResponsiveGridProps;
}

export default class MoviePosterGrid extends React.Component<MoviePosterGridProps, any> {

    context: MoviesComponentContext;

    static contextTypes = {
        showAddAction: React.PropTypes.bool,
        showRemoveAction: React.PropTypes.bool,
        localCollection: React.PropTypes.bool
    };

    renderMovies() {
        const gridProps = this.props.gridProps;
        const xs = 12 / gridProps.smallDevices.itemsPerRow;
        const md = 12 / gridProps.mediumDevices.itemsPerRow;
        const lg = 12 / gridProps.largeDevices.itemsPerRow;

        Meteor.subscribe("movies.myCollection");
        let myMovies = Movies.find().fetch();

        return this.props.movies.map((movie) => {
            let added: boolean = myMovies.filter((myMovie) => myMovie.externalSourceId === movie.externalSourceId).length > 0;
            return (
                <Col xs={xs} md={md} lg={lg}>
                    <MoviePoster key={movie._id} className="movie-grid__item"
                                 movie={movie} added={added} />
                </Col>
            );
        });
    }

    render(): JSX.Element {
        return (
            <Grid className="movie-grid" fluid={true}>
                <Row>
                    {this.renderMovies()}
                </Row>
            </Grid>
        );
    }

}