/* eslint-disable no-console */

import '@canner/rc-color-picker/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Panel as ColorPickerPanel} from '@canner/rc-color-picker';

function onChange(obj) {
  console.log(obj);
}

ReactDOM.render(
  <div>
    <ColorPickerPanel color={'#468890'} onChange={onChange} mode="HSL"/>
  </div>,
  document.getElementById('__react-content')
);
