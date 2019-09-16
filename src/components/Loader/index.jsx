/* eslint-disable react/prop-types */
// react libraries
import React from 'react';

import connect from 'utils/connect';

// styles
import './Loader.scss';

const Loader = (props) => {
  const { loader: { active } } = props;
  return (
    <>
      {active && (
        <div className="ui segment main-loader">
          <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
          <p />
          <p />
          <p />
        </div>
      )}
    </>
  );
};

export default connect({ })(Loader);
