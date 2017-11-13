/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './index.css'

class Root extends React.Component {

  render () {
    return <div className={css.index}>
      <div className={css.list}>
        <li>
          <a href="./vertical.html">vertical</a>
          <span>Vertical scroll.</span>
        </li>
        <li>
          <a href="./horizontal.html">horizontal</a>
          <span>Horizontal scroll.</span>
        </li>
      </div>
    </div>
  }
}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
