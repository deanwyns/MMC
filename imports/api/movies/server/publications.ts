import {Movies} from "../movie";

Meteor.publish("movies.myCollection", () => {
    return Movies.find();
});