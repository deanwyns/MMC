import * as React from "react";
import Header from "./HeaderComponent";
import {Grid} from "react-bootstrap";

export const AppComponent = ({content}) => (
    <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="content">
            {content}
        </div>
    </div>
);