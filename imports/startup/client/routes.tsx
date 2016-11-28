import * as React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";

import {mount} from 'react-mounter';

import {BrowseContainer} from "../../ui/containers/BrowseContainer";
import {CollectionContainer} from "../../ui/containers/CollectionContainer";
import {AppComponent} from "../../ui/components/AppComponent";
import BrowseComponent from "../../ui/components/BrowseComponent";

FlowRouter.route('/', {
    name: "index",
    action() {
        mount(AppComponent, { content: <BrowseComponent /> });
    }
});

FlowRouter.route('/my-collection', {
    name: "my-collection",
    action() {
        mount(AppComponent, { content: <CollectionContainer /> });
    }
});