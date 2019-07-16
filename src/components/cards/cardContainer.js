import React, { PureComponent } from 'react';

export default class CardContainer extends React.Component {
    render() {
        return (
            <div className="row card-container">
                {this.props.children}
            </div>
        );
    }
}