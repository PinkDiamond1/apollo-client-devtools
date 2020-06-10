import React from 'react';
import cx from 'classnames';

const RefreshIcon = () => {
  return (
    <svg className={cx("icon", "icon-refresh")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
      <g>
        <path d="M33.5,40.371l-11.447-6.609   c4.434-7.543,11.481-12.615,19.328-14.718c7.921-2.122,16.654-1.223,24.318,3.203c7.665,4.425,12.81,11.537,14.932,19.459   c0.094,0.349,0.183,0.699,0.263,1.051l7.141-2.288l1.27-0.408c-0.053-0.212-0.108-0.424-0.165-0.635   c-2.706-10.1-9.266-19.168-19.034-24.809c-9.771-5.64-20.903-6.787-31.002-4.08c-10.025,2.686-19.028,9.17-24.678,18.82   l-9.476-5.471l2.598,11.985l2.598,11.985l11.678-3.743L33.5,40.371z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#000000" d="M94.869,76.629l-2.598-11.985l-2.599-11.985l-11.678,3.743   l-11.679,3.744l10.872,6.276c-4.439,7.442-11.438,12.448-19.22,14.533c-7.921,2.123-16.653,1.224-24.317-3.202   c-7.256-4.188-12.253-10.786-14.566-18.197l-5.65,1.811l-2.738,0.877c2.958,9.425,9.32,17.812,18.549,23.139   c9.77,5.642,20.903,6.788,31.003,4.082c9.962-2.669,18.914-9.09,24.569-18.638L94.869,76.629z"/>
      </g>
    </svg>
  );
};

export default RefreshIcon;