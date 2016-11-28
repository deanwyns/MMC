import * as React from "react";
import HTMLAttributes = __React.HTMLAttributes;

export default class ScrollableDiv extends React.Component<HTMLAttributes, any> {

    render(): JSX.Element {
        let className = undefined;
        if (this.props.className) {
            className = this.props.className.concat(" scrollable");
        } else {
            className = "scrollable";
        }

        return (
            <div {...this.props} className={className}>
                {this.props.children}
            </div>
        );
    }
}