import React from 'react';
import Tab from './tab';


export default class Tabs extends React.Component {
    state = {
        active: this.props.children[0].props.label
    }
    switchTabItem = (label) => {
        this.setState({ active: label })
    }
    render() {
        const { active } = this.state;
        return (
            <div className="tabs">
                <ol className="tab-list">
                {this.props.children.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            active={ active === label }
                            key={label}
                            label={label}
                            onClick={this.switchTabItem}
                        />
                    );
                })}
                </ol>
                <div className="tab-content">
                {this.props.children.map((child) => {
                    if (child.props.label !== active) return undefined;
                    return child.props.children;
                })}
                </div>
            </div>
        );  
    }
}