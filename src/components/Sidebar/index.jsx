import React from 'react';
import PropTypes from 'prop-types';

export default class SideBar extends React.Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired
    }

    componentDidMount() {}

    render() {
      const { children: sidebarListItems } = this.props;
      return (
        <>
          <button type="button" className="sidebar-icon">
            {' '}
            <i className="icon trigram" />
          </button>
          <button type="button" className="sidebar-icon hide">
            {' '}
            <i className="icon close" />
          </button>

          <div className="sidebar">
            <span className="account-name">Hi, name</span>
            {sidebarListItems}
          </div>
        </>
      );
    }
}
