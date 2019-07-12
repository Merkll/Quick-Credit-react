import React from "react";
import PropTypes from 'prop-types';

export default class Header extends React.Component{
    state = { count: 0 }
    titles = ['React', 'Before', 'Vue'];
    static propTypes = {
        title: PropTypes.string,
        onTitleChange: PropTypes.func,
        children: PropTypes.element.isRequired
    };
    static defaultProps = {
        title: 'Default title'
    }
    static contextTypes = {
        title: PropTypes.string
    }

    changeTitle = (event) => {
        this.setState((prevState, props) => {
        const currentTitle = prevState.count;
        const newTitle = currentTitle + 1;        
        props.onTitleChange(this.titles[(newTitle % 3)]);
        return {
                count: newTitle
            }
        });
    };
    render() {
        return (
            <div>
                {this.props.children}
                <h1>{this.props.username}</h1>
                <h1>{this.props.title || this.context.title}</h1>
                <button onClick={this.changeTitle}></button>
            </div>
        )
    }
}