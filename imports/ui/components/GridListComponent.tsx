import * as React from "react";
import {ListStyle} from "../list_style";

export interface GridListComponentProps {
    listContent: JSX.Element;
    gridContent: JSX.Element;
}

export interface GridListComponentState {
    listStyle: ListStyle;
}

export default class GridListComponent extends React.Component<GridListComponentProps, GridListComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            listStyle: ListStyle.Grid
        };
    }

    setListStyle(listStyle: ListStyle) {
        this.setState({listStyle});
    }

    renderContent(): JSX.Element {
        switch (this.state.listStyle) {
            case ListStyle.Grid:
                return this.props.gridContent;
            case ListStyle.List:
                return this.props.listContent;
        }
    }

    render(): JSX.Element {
        return (
            <div className="full-width full-height">
                <div className="grid-list__actions">
                    <ul>
                        <li><i className="fa fa-th" aria-hidden="true" onClick={this.setListStyle.bind(this, ListStyle.Grid)}></i></li>
                        <li><i className="fa fa-list" aria-hidden="true" onClick={this.setListStyle.bind(this, ListStyle.List)}></i></li>
                    </ul>
                </div>
                {this.renderContent()}
            </div>
        );
    }

}