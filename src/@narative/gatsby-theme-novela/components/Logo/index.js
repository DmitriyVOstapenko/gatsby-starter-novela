import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo() {
  return (
    <svg viewBox="0 0 106 28" height="30px">
      <g transform="matrix(0.163812,0,0,0.162933,-57.8885,-29.1153)">
        <path d="M424.905,201.577L428.375,203.722L424.905,244.558L353.829,285.59L353.829,241.831C354.637,237.153 355.706,233.625 358.403,229.609C361.566,224.901 366.705,226.832 370.2,230.051C374.272,233.8 378.645,235.008 383.754,232.214C390.357,228.603 394.66,221.33 398.622,215.212C400.156,212.843 402.487,208.219 406.054,208.92C408.479,209.397 409.293,212.266 411.367,213.33C413.526,214.438 416.53,213.971 417.904,211.865C419.449,209.496 419.322,206.386 419.95,203.722C420.716,200.473 422.288,200.212 424.905,201.577Z"
              fill={fill}/>
      </g>
    </svg>
  );
}
/**
export default function Logo({ fill }) {
  return (
    <svg viewBox="0 0 106 28" height="30px">
      <g transform="matrix(0.163812,0,0,0.162933,-57.8885,-29.1153)">
        <path d="M424.905,201.577L428.375,203.722L424.905,244.558L353.829,285.59L353.829,241.831C354.637,237.153 355.706,233.625 358.403,229.609C361.566,224.901 366.705,226.832 370.2,230.051C374.272,233.8 378.645,235.008 383.754,232.214C390.357,228.603 394.66,221.33 398.622,215.212C400.156,212.843 402.487,208.219 406.054,208.92C408.479,209.397 409.293,212.266 411.367,213.33C413.526,214.438 416.53,213.971 417.904,211.865C419.449,209.496 419.322,206.386 419.95,203.722C420.716,200.473 422.288,200.212 424.905,201.577Z"
              fill={fill}/>
        <path d="M428.375,203.722L428.375,246.703L357.3,287.735L357.3,243.976C358.108,239.298 359.177,235.77 361.874,231.754C365.037,227.046 370.176,228.977 373.671,232.196C377.743,235.945 382.115,237.153 387.225,234.359C393.828,230.748 398.131,223.475 402.093,217.357C403.627,214.988 405.958,210.364 409.525,211.065C411.95,211.542 412.764,214.411 414.838,215.475C416.997,216.583 420.001,216.116 421.374,214.01C422.92,211.641 422.793,208.531 423.421,205.867C424.187,202.618 425.707,203.169 428.375,203.722Z"
              fill={fill}/>
        <path d="M353.829,242.002L353.829,285.782L357.305,287.735L357.305,243.955L353.829,242.002Z"
              fill={fill}/>
        <path d="M431.366,208.505C427.637,209.115 427.527,215.214 422.975,213.63C421.695,213.185 420.652,212.245 419.714,211.267C416.484,207.901 412.744,203.949 407.912,207.254C406.054,208.525 404.768,210.477 403.786,212.502C400.562,219.149 399.421,226.642 395.815,233.107C394.677,235.147 393.559,237.297 391.305,238.28C388.45,239.525 385.707,238.389 383.275,236.802C381.779,235.825 380.284,234.776 378.394,235.086C374.337,235.752 373.549,241.256 371.585,244.117C370.212,246.117 367.48,249.487 364.813,247.511L364.813,291.757L368.194,293.801L435.888,250.724L438.862,211.673L435.888,210.033C434.632,208.926 432.997,208.239 431.366,208.505Z"
              fill={fill}/>
        <path d="M364.813,247.511L364.813,291.848L368.289,293.801L368.289,249.463L364.813,247.511Z"
              fill={fill}/>
        <path d="M434.842,210.549C431.113,211.159 431.003,217.258 426.451,215.674C425.171,215.229 424.128,214.289 423.19,213.311C419.96,209.945 416.22,205.993 411.388,209.298C409.53,210.569 408.244,212.521 407.262,214.546C404.038,221.193 402.897,228.687 399.291,235.151C398.153,237.191 397.035,239.341 394.781,240.324C391.926,241.569 389.183,240.433 386.751,238.846C385.255,237.869 383.76,236.82 381.87,237.13C377.813,237.797 377.025,243.3 375.061,246.161C373.688,248.161 370.956,251.439 368.289,249.463L368.289,293.801L439.364,252.768L439.364,212.077C438.108,210.97 436.473,210.283 434.842,210.549Z"
              fill={fill}/>
        <path d="M441.896,214.898C440.812,215.66 440.324,216.506 439.598,217.615C437.717,220.484 436.593,224.183 433.564,226.129C432.726,226.667 431.684,226.967 430.723,226.71C429.613,226.414 428.82,225.461 427.835,224.872C424.322,222.77 420.678,226.15 418.69,228.806C416.699,231.467 415.314,234.613 413.249,237.175C410.877,240.118 407.353,242.948 403.322,242.303C401.848,242.067 399.067,239.689 399.067,239.689L396.359,238.105C395.341,237.598 394.285,237.365 393.146,237.705C391.073,238.325 389.919,240.643 389.125,242.475C388.123,244.784 387.412,247.2 386.694,249.604C386.375,250.671 385.956,251.742 385.196,252.556C383.261,254.628 380.565,249.372 380.565,249.372L377.898,247.915C377.033,247.348 376.215,247.029 374.834,247.209L374.834,297.7L378.31,299.605L445.91,256.668L447.535,216.164L444.794,214.605C443.831,214.05 442.576,214.42 441.896,214.898Z"
              fill={fill}/>
        <path d="M445.686,216.566C444.602,217.329 443.8,218.412 443.074,219.52C441.193,222.39 440.068,226.088 437.04,228.034C436.202,228.572 435.16,228.872 434.199,228.615C433.089,228.32 432.296,227.366 431.311,226.777C427.798,224.676 424.154,228.055 422.166,230.711C420.175,233.372 418.79,236.519 416.725,239.08C414.353,242.023 410.829,244.853 406.798,244.208C403.265,243.643 400.391,238.484 396.622,239.61C394.549,240.23 393.395,242.548 392.601,244.38C391.599,246.689 390.888,249.105 390.17,251.51C389.851,252.576 389.432,253.648 388.672,254.461C386.737,256.533 384.26,253.847 382.98,251.803C381.877,250.041 380.834,248.833 378.31,249.162L378.31,299.605L449.386,258.573L449.386,218.472C448.677,215.676 446.735,215.828 445.686,216.566Z"
              fill={fill}/>
        <path d="M374.834,247.209L374.834,297.653L378.31,299.605L378.31,249.162L374.834,247.209Z"
              fill={fill}/>
        <path d="M385.291,267.449L385.291,303.529L388.767,305.482L456.367,262.497L459.843,220.361L456.367,218.408C450.187,220.291 450.996,233.973 448.483,236.879C444.325,241.69 441.509,235.514 438.249,236.832C436.106,237.698 435.864,240.724 435.134,242.748C434.633,244.139 433.704,245.581 432.43,246.374C430.729,247.433 428.86,246.889 427.539,245.518C425.896,243.811 424.124,239.347 424.124,239.347L420.648,237.394C417.813,236.219 414.95,238.353 413.167,240.398C411.401,242.424 410.216,244.905 409.305,247.413C407.754,251.683 407.041,256.197 405.608,260.503C404.769,263.022 403.106,266.961 400.357,267.833C397.623,268.699 395.081,262.576 395.081,262.576C395.081,262.576 392.862,261.5 391.766,260.727C390.673,259.957 389.423,259.817 388.145,260.384C386.096,261.296 385.291,265.36 385.291,267.449Z"
              fill={fill}/>
        <path d="M388.767,269.402C388.767,267.313 389.572,263.247 391.621,262.336C394.181,261.199 396.629,262.907 397.922,266.815C398.626,268.942 401.099,270.652 403.833,269.785C406.582,268.914 408.245,264.975 409.084,262.455C410.517,258.15 411.229,253.635 412.781,249.366C413.692,246.858 414.877,244.377 416.643,242.351C418.426,240.305 421.289,238.172 424.124,239.347C427.687,240.823 428.542,244.902 431.015,247.47C432.336,248.841 434.205,249.386 435.906,248.326C437.18,247.533 438.109,246.092 438.61,244.7C439.34,242.676 439.582,239.651 441.725,238.785C444.985,237.466 447.801,243.642 451.959,238.832C454.472,235.926 453.663,222.244 459.843,220.361L459.843,264.45L388.767,305.482L388.767,269.402Z"
              fill={fill}/>
        <path d="M385.291,267.335L385.291,303.529L388.767,305.482L388.767,269.288L385.291,267.335Z"
              fill={fill}/>       
      </g>
    </svg>
  );
}
*/
