import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 106 28" height="30px">
      <g transform="matrix(0.163812,0,0,0.162933,-57.8885,-29.1153)">
        <path d="M424.905,201.577L428.375,203.722L424.905,244.558L353.829,285.59L353.829,241.831C354.637,237.153 355.706,233.625 358.403,229.609C361.566,224.901 366.705,226.832 370.2,230.051C374.272,233.8 378.645,235.008 383.754,232.214C390.357,228.603 394.66,221.33 398.622,215.212C400.156,212.843 402.487,208.219 406.054,208.92C408.479,209.397 409.293,212.266 411.367,213.33C413.526,214.438 416.53,213.971 417.904,211.865C419.449,209.496 419.322,206.386 419.95,203.722C420.716,200.473 422.288,200.212 424.905,201.577Z" fill={fill}/>
       </g>
    </svg>
  );
}
