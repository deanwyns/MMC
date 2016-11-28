import {AbstractService} from "../../../utils/abstract_service";
import {Movie} from "../../movies/movie";

interface MovieResult {
    id: number;
    poster_path: string;
    overview: string;
    release_date: string;
    title: string;
    backdrop_path: string;
    vote_count: number;
    vote_average: number;
}

interface ImageConfiguration {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

interface Configuration {
    images: ImageConfiguration;
}

export class TheMovieDbService extends AbstractService {

    searchMovies(query: string, page: number = 1): Movie[] {
        let conf = this.getConfiguration();
        let result = this.get("search/movie", {
            "language": "en-US",
            "query": query,
            "page": page
        });

        let parsedContent = JSON.parse(result.content);

        let movies: Movie[] = parsedContent.results.map((result: MovieResult) => {
            return this.mapMovieResult(result, conf);
        });

        return movies;
    }

    getFeaturedMovies(page: number): Movie[] {
        let conf = this.getConfiguration();
        let result = this.get("discover/movie", {
            "language": "en-US",
            "sort_by": "popularity.desc",
            "page": page
        });

        let parsedContent = JSON.parse(result.content);

        let movies: Movie[] = parsedContent.results.map((result: MovieResult) => {
            return this.mapMovieResult(result, conf);
        });

        return movies;
    }

    getConfiguration(): Configuration {
        return this.get("configuration").data as Configuration;
    }

    private mapMovieResult(result: MovieResult, conf: Configuration): Movie {
        let movie = new Movie();
        movie.posterUrl = conf.images.base_url + "original" + result.poster_path;
        movie.backdropUrl = conf.images.base_url + "original" + result.backdrop_path;
        movie.externalSourceId = result.id;
        movie.overview = result.overview;
        //movie.releaseDate = moment(result.release_date);
        movie.title = result.title;
        movie.voteAverage = result.vote_average;
        movie.voteCount = result.vote_count;

        return movie;
    }

}