/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import connect from 'utils/connect';

class SideBar extends React.Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired
    }

    componentDidMount() {}

    render() {
      const { children: sidebarListItems, auth: { data = {} } } = this.props;

      const { firstname = '', lastname = '' } = data;
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
            <span className="account-name">
              Hi,
              {`${firstname} ${lastname}`}
            </span>
            {sidebarListItems}
          </div>
        </>
      );
    }
}

export default connect({})(SideBar);
