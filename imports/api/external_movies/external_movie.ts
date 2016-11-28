import {Movie} from "../movies/movie";

export const ExternalMovies = new Mongo.Collection<Movie>("external_movies");