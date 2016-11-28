import * as React from "react";

export default class Header extends React.Component<any, any> {

    render(): JSX.Element {
        return (
            <div className="header-component">
                <div className="header-component__title">MMC</div>
                <ul className="header-component__menu">
                    <li className="header-component__menu_item"><a href="/">Ontdek</a></li>
                    <li className="header-component__menu_item"><a href="/my-collection">Mijn collectie</a></li>
                </ul>
            </div>
        );
    }
}