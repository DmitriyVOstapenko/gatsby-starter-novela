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
    <svg viewBox="0 0 106 28" height="25px">
    <g transform="matrix(0.217586,0,0,0.216418,-76.153,-43.3757)">
        <path d="M424.905,201.577L428.375,203.722L424.905,244.558L353.829,285.59L353.829,241.831C354.637,237.153 355.706,233.625 358.403,229.609C361.566,224.901 366.705,226.832 370.2,230.051C374.272,233.8 378.645,235.008 383.754,232.214C390.357,228.603 394.66,221.33 398.622,215.212C400.156,212.843 402.487,208.219 406.054,208.92C408.479,209.397 409.293,212.266 411.367,213.33C413.526,214.438 416.53,213.971 417.904,211.865C419.449,209.496 419.322,206.386 419.95,203.722C420.716,200.473 422.288,200.212 424.905,201.577Z"
              fill="#3f5b80" />
        <path d="M428.375,203.722L428.375,246.703L357.3,287.735L357.3,243.976C358.108,239.298 359.177,235.77 361.874,231.754C365.037,227.046 370.176,228.977 373.671,232.196C377.743,235.945 382.115,237.153 387.225,234.359C393.828,230.748 398.131,223.475 402.093,217.357C403.627,214.988 405.958,210.364 409.525,211.065C411.95,211.542 412.764,214.411 414.838,215.475C416.997,216.583 420.001,216.116 421.374,214.01C422.92,211.641 422.793,208.531 423.421,205.867C424.187,202.618 425.707,203.169 428.375,203.722Z"
              fill="#003f5c" />
        <path d="M353.829,242.002L353.829,285.782L357.305,287.735L357.305,243.955L353.829,242.002Z"
              fill="#124f63" />
        <path d="M431.366,208.505C427.637,209.115 427.527,215.214 422.975,213.63C421.695,213.185 420.652,212.245 419.714,211.267C416.484,207.901 412.744,203.949 407.912,207.254C406.054,208.525 404.768,210.477 403.786,212.502C400.562,219.149 399.421,226.642 395.815,233.107C394.677,235.147 393.559,237.297 391.305,238.28C388.45,239.525 385.707,238.389 383.275,236.802C381.779,235.825 380.284,234.776 378.394,235.086C374.337,235.752 373.549,241.256 371.585,244.117C370.212,246.117 367.48,249.487 364.813,247.511L364.813,291.757L368.194,293.801L435.888,250.724L438.862,211.673L435.888,210.033C434.632,208.926 432.997,208.239 431.366,208.505Z"
              fill="#7e79b9" />
        <path d="M364.813,247.511L364.813,291.848L368.289,293.801L368.289,249.463L364.813,247.511Z"
              fill="#6969b0" />
        <path d="M434.842,210.549C431.113,211.159 431.003,217.258 426.451,215.674C425.171,215.229 424.128,214.289 423.19,213.311C419.96,209.945 416.22,205.993 411.388,209.298C409.53,210.569 408.244,212.521 407.262,214.546C404.038,221.193 402.897,228.687 399.291,235.151C398.153,237.191 397.035,239.341 394.781,240.324C391.926,241.569 389.183,240.433 386.751,238.846C385.255,237.869 383.76,236.82 381.87,237.13C377.813,237.797 377.025,243.3 375.061,246.161C373.688,248.161 370.956,251.439 368.289,249.463L368.289,293.801L439.364,252.768L439.364,212.077C438.108,210.97 436.473,210.283 434.842,210.549Z"
              fill="#5c54a4" />
        <path d="M441.896,214.898C440.812,215.66 440.324,216.506 439.598,217.615C437.717,220.484 436.593,224.183 433.564,226.129C432.726,226.667 431.684,226.967 430.723,226.71C429.613,226.414 428.82,225.461 427.835,224.872C424.322,222.77 420.678,226.15 418.69,228.806C416.699,231.467 415.314,234.613 413.249,237.175C410.877,240.118 407.353,242.948 403.322,242.303C401.848,242.067 399.067,239.689 399.067,239.689L396.359,238.105C395.341,237.598 394.285,237.365 393.146,237.705C391.073,238.325 389.919,240.643 389.125,242.475C388.123,244.784 387.412,247.2 386.694,249.604C386.375,250.671 385.956,251.742 385.196,252.556C383.261,254.628 380.565,249.372 380.565,249.372L377.898,247.915C377.033,247.348 376.215,247.029 374.834,247.209L374.834,297.7L378.31,299.605L445.91,256.668L447.535,216.164L444.794,214.605C443.831,214.05 442.576,214.42 441.896,214.898Z"
              fill="#f6797c" />
        <path d="M445.686,216.566C444.602,217.329 443.8,218.412 443.074,219.52C441.193,222.39 440.068,226.088 437.04,228.034C436.202,228.572 435.16,228.872 434.199,228.615C433.089,228.32 432.296,227.366 431.311,226.777C427.798,224.676 424.154,228.055 422.166,230.711C420.175,233.372 418.79,236.519 416.725,239.08C414.353,242.023 410.829,244.853 406.798,244.208C403.265,243.643 400.391,238.484 396.622,239.61C394.549,240.23 393.395,242.548 392.601,244.38C391.599,246.689 390.888,249.105 390.17,251.51C389.851,252.576 389.432,253.648 388.672,254.461C386.737,256.533 384.26,253.847 382.98,251.803C381.877,250.041 380.834,248.833 378.31,249.162L378.31,299.605L449.386,258.573L449.386,218.472C448.677,215.676 446.735,215.828 445.686,216.566Z"
              fill="#ef5675" />
        <path d="M374.834,247.209L374.834,297.653L378.31,299.605L378.31,249.162L374.834,247.209Z"
              fill="#ef6a75" />
        <path d="M385.291,267.449L385.291,303.529L388.767,305.482L456.367,262.497L459.843,220.361L456.367,218.408C450.187,220.291 450.996,233.973 448.483,236.879C444.325,241.69 441.509,235.514 438.249,236.832C436.106,237.698 435.864,240.724 435.134,242.748C434.633,244.139 433.704,245.581 432.43,246.374C430.729,247.433 428.86,246.889 427.539,245.518C425.896,243.811 424.124,239.347 424.124,239.347L420.648,237.394C417.813,236.219 414.95,238.353 413.167,240.398C411.401,242.424 410.216,244.905 409.305,247.413C407.754,251.683 407.041,256.197 405.608,260.503C404.769,263.022 403.106,266.961 400.357,267.833C397.623,268.699 395.081,262.576 395.081,262.576C395.081,262.576 392.862,261.5 391.766,260.727C390.673,259.957 389.423,259.817 388.145,260.384C386.096,261.296 385.291,265.36 385.291,267.449Z"
              fill="#fec65d" />
        <path d="M388.767,269.402C388.767,267.313 389.572,263.247 391.621,262.336C394.181,261.199 396.629,262.907 397.922,266.815C398.626,268.942 401.099,270.652 403.833,269.785C406.582,268.914 408.245,264.975 409.084,262.455C410.517,258.15 411.229,253.635 412.781,249.366C413.692,246.858 414.877,244.377 416.643,242.351C418.426,240.305 421.289,238.172 424.124,239.347C427.687,240.823 428.542,244.902 431.015,247.47C432.336,248.841 434.205,249.386 435.906,248.326C437.18,247.533 438.109,246.092 438.61,244.7C439.34,242.676 439.582,239.651 441.725,238.785C444.985,237.466 447.801,243.642 451.959,238.832C454.472,235.926 453.663,222.244 459.843,220.361L459.843,264.45L388.767,305.482L388.767,269.402Z"
              fill="#f99e2f" />
        <path d="M385.291,267.335L385.291,303.529L388.767,305.482L388.767,269.288L385.291,267.335Z"
              fill="#fdb82c" />
    </g>
    <g transform="matrix(0.573787,0,0,0.573787,-5.03312,-3.20305)">
        <g transform="matrix(32.3533,0,0,32.3533,59.6,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.418,-0.712C0.465,-0.712 0.506,-0.704 0.543,-0.689C0.579,-0.673 0.607,-0.651 0.627,-0.623C0.648,-0.594 0.658,-0.562 0.658,-0.526C0.658,-0.489 0.648,-0.457 0.627,-0.428C0.607,-0.399 0.579,-0.377 0.543,-0.361C0.506,-0.344 0.465,-0.336 0.418,-0.336L0.304,-0.336L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.416,-0.032L0.416,0L0.062,0L0.062,-0.032ZM0.403,-0.368C0.438,-0.368 0.462,-0.382 0.476,-0.41C0.491,-0.438 0.498,-0.477 0.498,-0.526C0.498,-0.575 0.491,-0.613 0.477,-0.64C0.463,-0.667 0.438,-0.68 0.403,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.368L0.403,-0.368Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,82.312,37.6007)">
            <path d="M0.34,-0.778L0.429,-0.916C0.436,-0.928 0.444,-0.936 0.452,-0.941C0.46,-0.946 0.469,-0.948 0.478,-0.948C0.49,-0.948 0.5,-0.944 0.508,-0.937C0.516,-0.93 0.52,-0.92 0.52,-0.908C0.52,-0.89 0.511,-0.874 0.492,-0.86L0.36,-0.76L0.34,-0.778ZM0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.624,-0.712L0.63,-0.48L0.598,-0.48C0.598,-0.485 0.595,-0.5 0.588,-0.525C0.581,-0.55 0.571,-0.573 0.558,-0.594C0.543,-0.621 0.525,-0.642 0.505,-0.657C0.485,-0.672 0.463,-0.68 0.438,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.38L0.355,-0.38C0.373,-0.38 0.39,-0.387 0.405,-0.402C0.42,-0.417 0.433,-0.435 0.442,-0.457C0.451,-0.478 0.455,-0.499 0.455,-0.518L0.487,-0.518L0.487,-0.205L0.455,-0.205C0.455,-0.225 0.451,-0.246 0.442,-0.268C0.433,-0.289 0.42,-0.307 0.405,-0.322C0.39,-0.337 0.373,-0.344 0.355,-0.344L0.304,-0.344L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.437,-0.032C0.474,-0.032 0.504,-0.047 0.529,-0.076C0.554,-0.105 0.572,-0.138 0.585,-0.174C0.59,-0.189 0.595,-0.208 0.599,-0.231C0.603,-0.254 0.605,-0.269 0.606,-0.276L0.638,-0.276L0.632,0L0.062,0L0.062,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,104.636,37.6007)">
            <path d="M0.19,-0.032L0.27,-0.032C0.279,-0.032 0.286,-0.034 0.289,-0.038C0.292,-0.041 0.294,-0.047 0.294,-0.056L0.294,-0.646C0.294,-0.657 0.291,-0.665 0.284,-0.671C0.277,-0.677 0.268,-0.68 0.257,-0.68C0.226,-0.68 0.197,-0.663 0.171,-0.628C0.145,-0.594 0.126,-0.554 0.113,-0.508C0.106,-0.483 0.101,-0.463 0.098,-0.446C0.095,-0.429 0.093,-0.418 0.092,-0.414L0.06,-0.414L0.068,-0.712L0.668,-0.712L0.676,-0.414L0.644,-0.414C0.643,-0.418 0.642,-0.429 0.639,-0.446C0.635,-0.463 0.63,-0.483 0.623,-0.508C0.61,-0.554 0.591,-0.594 0.565,-0.628C0.539,-0.663 0.51,-0.68 0.479,-0.68C0.468,-0.68 0.459,-0.677 0.452,-0.671C0.445,-0.665 0.442,-0.657 0.442,-0.646L0.442,-0.056C0.442,-0.047 0.444,-0.041 0.448,-0.038C0.451,-0.034 0.457,-0.032 0.466,-0.032L0.546,-0.032L0.546,0L0.19,0L0.19,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,127.801,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.624,-0.712L0.63,-0.48L0.598,-0.48C0.598,-0.485 0.595,-0.5 0.588,-0.525C0.581,-0.55 0.571,-0.573 0.558,-0.594C0.543,-0.621 0.525,-0.642 0.505,-0.657C0.485,-0.672 0.463,-0.68 0.438,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.38L0.355,-0.38C0.373,-0.38 0.39,-0.387 0.405,-0.402C0.42,-0.417 0.433,-0.435 0.442,-0.457C0.451,-0.478 0.455,-0.499 0.455,-0.518L0.487,-0.518L0.487,-0.205L0.455,-0.205C0.455,-0.225 0.451,-0.246 0.442,-0.268C0.433,-0.289 0.42,-0.307 0.405,-0.322C0.39,-0.337 0.373,-0.344 0.355,-0.344L0.304,-0.344L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.437,-0.032C0.474,-0.032 0.504,-0.047 0.529,-0.076C0.554,-0.105 0.572,-0.138 0.585,-0.174C0.59,-0.189 0.595,-0.208 0.599,-0.231C0.603,-0.254 0.605,-0.269 0.606,-0.276L0.638,-0.276L0.632,0L0.062,0L0.062,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,150.125,37.6007)">
            <path d="M0.595,0.024C0.552,0.024 0.519,0.011 0.494,-0.014C0.469,-0.039 0.456,-0.077 0.456,-0.126L0.456,-0.25C0.456,-0.282 0.448,-0.309 0.433,-0.331C0.417,-0.353 0.393,-0.364 0.36,-0.364L0.304,-0.364L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.416,-0.032L0.416,0L0.062,0L0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.386,-0.712C0.458,-0.712 0.516,-0.696 0.56,-0.665C0.604,-0.633 0.626,-0.59 0.626,-0.536C0.626,-0.49 0.609,-0.454 0.576,-0.427C0.542,-0.4 0.497,-0.384 0.442,-0.377L0.442,-0.37C0.494,-0.361 0.534,-0.342 0.562,-0.315C0.59,-0.287 0.604,-0.244 0.604,-0.185L0.604,-0.074C0.604,-0.046 0.613,-0.032 0.632,-0.032C0.649,-0.032 0.662,-0.046 0.67,-0.075C0.678,-0.104 0.682,-0.139 0.682,-0.18L0.714,-0.18C0.714,-0.115 0.705,-0.065 0.688,-0.029C0.671,0.006 0.64,0.024 0.595,0.024ZM0.371,-0.396C0.406,-0.396 0.431,-0.409 0.445,-0.435C0.459,-0.461 0.466,-0.497 0.466,-0.544C0.466,-0.589 0.459,-0.623 0.445,-0.646C0.431,-0.669 0.406,-0.68 0.371,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.396L0.371,-0.396Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,182.801,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.418,-0.712C0.465,-0.712 0.506,-0.704 0.543,-0.689C0.579,-0.673 0.607,-0.651 0.627,-0.623C0.648,-0.594 0.658,-0.562 0.658,-0.526C0.658,-0.489 0.648,-0.457 0.627,-0.428C0.607,-0.399 0.579,-0.377 0.543,-0.361C0.506,-0.344 0.465,-0.336 0.418,-0.336L0.304,-0.336L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.416,-0.032L0.416,0L0.062,0L0.062,-0.032ZM0.403,-0.368C0.438,-0.368 0.462,-0.382 0.476,-0.41C0.491,-0.438 0.498,-0.477 0.498,-0.526C0.498,-0.575 0.491,-0.613 0.477,-0.64C0.463,-0.667 0.438,-0.68 0.403,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.368L0.403,-0.368Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,205.513,37.6007)">
            <path d="M0.34,-0.778L0.429,-0.916C0.436,-0.928 0.444,-0.936 0.452,-0.941C0.46,-0.946 0.469,-0.948 0.478,-0.948C0.49,-0.948 0.5,-0.944 0.508,-0.937C0.516,-0.93 0.52,-0.92 0.52,-0.908C0.52,-0.89 0.511,-0.874 0.492,-0.86L0.36,-0.76L0.34,-0.778ZM0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.624,-0.712L0.63,-0.48L0.598,-0.48C0.598,-0.485 0.595,-0.5 0.588,-0.525C0.581,-0.55 0.571,-0.573 0.558,-0.594C0.543,-0.621 0.525,-0.642 0.505,-0.657C0.485,-0.672 0.463,-0.68 0.438,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.38L0.355,-0.38C0.373,-0.38 0.39,-0.387 0.405,-0.402C0.42,-0.417 0.433,-0.435 0.442,-0.457C0.451,-0.478 0.455,-0.499 0.455,-0.518L0.487,-0.518L0.487,-0.205L0.455,-0.205C0.455,-0.225 0.451,-0.246 0.442,-0.268C0.433,-0.289 0.42,-0.307 0.405,-0.322C0.39,-0.337 0.373,-0.344 0.355,-0.344L0.304,-0.344L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.437,-0.032C0.474,-0.032 0.504,-0.047 0.529,-0.076C0.554,-0.105 0.572,-0.138 0.585,-0.174C0.59,-0.189 0.595,-0.208 0.599,-0.231C0.603,-0.254 0.605,-0.269 0.606,-0.276L0.638,-0.276L0.632,0L0.062,0L0.062,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,227.837,37.6007)">
            <path d="M0.19,-0.032L0.27,-0.032C0.279,-0.032 0.286,-0.034 0.289,-0.038C0.292,-0.041 0.294,-0.047 0.294,-0.056L0.294,-0.646C0.294,-0.657 0.291,-0.665 0.284,-0.671C0.277,-0.677 0.268,-0.68 0.257,-0.68C0.226,-0.68 0.197,-0.663 0.171,-0.628C0.145,-0.594 0.126,-0.554 0.113,-0.508C0.106,-0.483 0.101,-0.463 0.098,-0.446C0.095,-0.429 0.093,-0.418 0.092,-0.414L0.06,-0.414L0.068,-0.712L0.668,-0.712L0.676,-0.414L0.644,-0.414C0.643,-0.418 0.642,-0.429 0.639,-0.446C0.635,-0.463 0.63,-0.483 0.623,-0.508C0.61,-0.554 0.591,-0.594 0.565,-0.628C0.539,-0.663 0.51,-0.68 0.479,-0.68C0.468,-0.68 0.459,-0.677 0.452,-0.671C0.445,-0.665 0.442,-0.657 0.442,-0.646L0.442,-0.056C0.442,-0.047 0.444,-0.041 0.448,-0.038C0.451,-0.034 0.457,-0.032 0.466,-0.032L0.546,-0.032L0.546,0L0.19,0L0.19,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,251.002,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.624,-0.712L0.63,-0.48L0.598,-0.48C0.598,-0.485 0.595,-0.5 0.588,-0.525C0.581,-0.55 0.571,-0.573 0.558,-0.594C0.543,-0.621 0.525,-0.642 0.505,-0.657C0.485,-0.672 0.463,-0.68 0.438,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.38L0.355,-0.38C0.373,-0.38 0.39,-0.387 0.405,-0.402C0.42,-0.417 0.433,-0.435 0.442,-0.457C0.451,-0.478 0.455,-0.499 0.455,-0.518L0.487,-0.518L0.487,-0.205L0.455,-0.205C0.455,-0.225 0.451,-0.246 0.442,-0.268C0.433,-0.289 0.42,-0.307 0.405,-0.322C0.39,-0.337 0.373,-0.344 0.355,-0.344L0.304,-0.344L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.437,-0.032C0.474,-0.032 0.504,-0.047 0.529,-0.076C0.554,-0.105 0.572,-0.138 0.585,-0.174C0.59,-0.189 0.595,-0.208 0.599,-0.231C0.603,-0.254 0.605,-0.269 0.606,-0.276L0.638,-0.276L0.632,0L0.062,0L0.062,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,273.326,37.6007)">
            <path d="M0.595,0.024C0.552,0.024 0.519,0.011 0.494,-0.014C0.469,-0.039 0.456,-0.077 0.456,-0.126L0.456,-0.25C0.456,-0.282 0.448,-0.309 0.433,-0.331C0.417,-0.353 0.393,-0.364 0.36,-0.364L0.304,-0.364L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.416,-0.032L0.416,0L0.062,0L0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.386,-0.712C0.458,-0.712 0.516,-0.696 0.56,-0.665C0.604,-0.633 0.626,-0.59 0.626,-0.536C0.626,-0.49 0.609,-0.454 0.576,-0.427C0.542,-0.4 0.497,-0.384 0.442,-0.377L0.442,-0.37C0.494,-0.361 0.534,-0.342 0.562,-0.315C0.59,-0.287 0.604,-0.244 0.604,-0.185L0.604,-0.074C0.604,-0.046 0.613,-0.032 0.632,-0.032C0.649,-0.032 0.662,-0.046 0.67,-0.075C0.678,-0.104 0.682,-0.139 0.682,-0.18L0.714,-0.18C0.714,-0.115 0.705,-0.065 0.688,-0.029C0.671,0.006 0.64,0.024 0.595,0.024ZM0.371,-0.396C0.406,-0.396 0.431,-0.409 0.445,-0.435C0.459,-0.461 0.466,-0.497 0.466,-0.544C0.466,-0.589 0.459,-0.623 0.445,-0.646C0.431,-0.669 0.406,-0.68 0.371,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.396L0.371,-0.396Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,296.944,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.434,-0.712C0.489,-0.712 0.54,-0.697 0.586,-0.668C0.632,-0.638 0.669,-0.597 0.696,-0.544C0.723,-0.491 0.736,-0.43 0.736,-0.362C0.736,-0.294 0.723,-0.232 0.696,-0.177C0.669,-0.122 0.632,-0.078 0.586,-0.047C0.539,-0.016 0.489,0 0.434,0L0.062,0L0.062,-0.032ZM0.417,-0.032C0.46,-0.032 0.495,-0.047 0.524,-0.077C0.552,-0.106 0.566,-0.149 0.566,-0.206L0.566,-0.506C0.566,-0.563 0.552,-0.606 0.524,-0.635C0.495,-0.665 0.46,-0.68 0.417,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.417,-0.032Z"
                  fill={fill}/>
        </g>
        <g transform="matrix(32.3533,0,0,32.3533,322.374,37.6007)">
            <path d="M0.062,-0.032L0.132,-0.032C0.141,-0.032 0.148,-0.034 0.151,-0.038C0.154,-0.041 0.156,-0.047 0.156,-0.056L0.156,-0.656C0.156,-0.665 0.154,-0.672 0.151,-0.675C0.148,-0.678 0.141,-0.68 0.132,-0.68L0.062,-0.68L0.062,-0.712L0.398,-0.712L0.398,-0.68L0.328,-0.68C0.319,-0.68 0.313,-0.678 0.31,-0.675C0.306,-0.672 0.304,-0.665 0.304,-0.656L0.304,-0.056C0.304,-0.047 0.306,-0.041 0.31,-0.038C0.313,-0.034 0.319,-0.032 0.328,-0.032L0.398,-0.032L0.398,0L0.062,0L0.062,-0.032Z"
                  fill={fill}/>
        </g>
    </g>
    </svg>
  );
}
