import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {MoviesComponentProps} from "../components/MoviesComponent";
import BrowseComponent from "../components/BrowseComponent";
import {ExternalMovies} from "../../api/external_movies/external_movie";

export const BrowseContainer = createContainer((): any => {
    return {
        movies: [],
        localCollection: false
    };
}, BrowseComponent);