export class Movie {

    _id: string;

    title: string;
    posterUrl: string;
    backdropUrl: string;
    overview: string;
    releaseDate: moment.Moment;
    genres: string[];

    voteAverage: number;
    voteCount: number;

    externalSourceId: number;

}

export const Movies = new Mongo.Collection<Movie>("movies");