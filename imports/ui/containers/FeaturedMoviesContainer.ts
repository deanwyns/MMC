import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {ExternalMovies} from "../../api/external_movies/external_movie";
import MoviesComponent from "../components/MoviesComponent";
import {MoviesComponentProps} from "../components/MoviesComponent";

export const FeaturedMoviesContainer = createContainer((): MoviesComponentProps => {
    Meteor.subscribe("externalMovies.featured");

    return {
        movies: ExternalMovies.find({}).fetch(),
        showAddAction: true,
        showRemoveAction: false,
        localCollection: false,
        showSearch: true
    };
}, MoviesComponent);