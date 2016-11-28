import {TheMovieDbService} from "./tmdb_service";

const BASE_URL = Meteor.settings["tmdb"]["baseUrl"];
const API_KEY = Meteor.settings["tmdb"]["apiKey"];
const tmdbService = new TheMovieDbService(BASE_URL, API_KEY);

Meteor.publish("externalMovies.featured", function(page) {
    try {
        let movies = tmdbService.getFeaturedMovies(page);

        for (let movie of movies) {
            this.added("external_movies", movie.externalSourceId, movie);
        }
        this.ready();
    } catch (error) {
        console.error(error);
    }
});

Meteor.publish("externalMovies.search", function(query, page) {
    try {
        let movies = tmdbService.searchMovies(query, page);

        for (let movie of movies) {
            this.added("external_movies", movie.externalSourceId, movie);
        }
        this.ready();
    } catch (error) {
        console.error(error);
    }
});