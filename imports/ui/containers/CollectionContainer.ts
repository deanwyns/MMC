import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Movies} from "../../api/movies/movie";
import MoviesComponent from "../components/MoviesComponent";
import {MoviesComponentProps} from "../components/MoviesComponent";

export const CollectionContainer = createContainer((): MoviesComponentProps => {
    Meteor.subscribe("movies.myCollection");

    return {
        movies: Movies.find({}).fetch(),
        showAddAction: false,
        showRemoveAction: true,
        localCollection: true,
        showSearch: true
    };
}, MoviesComponent);