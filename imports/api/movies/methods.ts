import {Movie, Movies} from "./movie";

export namespace MovieMethods {

    export const insert = new ValidatedMethod({
        name: "Movies.methods.insert",
        validate: null,
        run({movie}) {
            if (movie._id) {
                delete movie._id;
            }

            Movies.insert(movie);
        }
    });

    export const remove = new ValidatedMethod({
        name: "Movies.methods.remove",
        validate: null,
        run({movieId}) {
            Movies.remove(movieId);
        }
    });

}