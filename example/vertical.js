/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import css from './vertical.css'
import Scroll from '../src/scroll'

class Root extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  getList = () => {
    const list = Array.from({length: 50},(v,i)=>(i+1))

    const li = list.map((v)=>{
      return <li key={v}>{v}</li>
    })

    return <ul>{li}</ul>
  }


  render () {
    return <div className={css.vertical}>
      <Scroll>
        {this.getList()}
      </Scroll>
    </div>
  }

}

const props = {};

render(
  <Root {...props} />,
  document.getElementById('root')
);
