/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Blink from 'components/Blink';

export default (props) => {
  const {
    title, subtitle, icon, blink, color, titleColor = 'text-primary', subtitleColor = 'text-gray-800', border = 'border-left-purple'
  } = props;
  const blinkElement = blink ? <Blink color={color} /> : '';
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card ${border} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-uppercase mb-1 ${titleColor}`}>{title}</div>
              <div className={`h5 mb-0 font-weight-bold  ${subtitleColor}`}>{subtitle}</div>
            </div>
            <div className="col-auto">
              {blinkElement}
              <i className={`fas ${icon} fa-2x text-gray-300`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
