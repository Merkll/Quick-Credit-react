import React from "react";
import PropTypes from 'prop-types';

export default class SideBar extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    }

    sidenavToggle =  () => {
        console.log(sidebarTogle);
    }

    render() {
        const { children: sidebarListItems, heading} = this.props;
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>{heading}</h3>
                    </div>
                    <ul className="list-unstyled components">
                        {sidebarListItems}
                    </ul>
                </nav>
            </div>
        );
    }
}
