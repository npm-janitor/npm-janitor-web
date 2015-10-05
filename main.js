import React from 'react'
import Cards from './components/cards.jsx'
import fetch from 'isomorphic-fetch';
import DebounceInput from 'react-debounce-input';

class App extends React.Component {
  constructor () {
      super()
      this.state = {json: []}
  }

  _handleClick (name) {
    fetch(`https://npm-janitor.herokuapp.com/api/${name.toLowerCase()}`).
    then((data) => data.json()).
    then((json) => this.setState({json}));
  }

  render () {
      debugger;
        return <div>
        <img src='http://i.imgur.com/zKKUaav.gif'/>
        <div className="info">
            <h1> npm-janitor </h1>
            <h3> Enter the npm user name in the search box. </h3>
            <p> Red -> Error, Warnings -> Yellow and Green -> Recommendations. </p>
        </div>
        <DebounceInput
                minLength={2}
                debounceTimeout={300}
                onChange={this._handleClick.bind(this)}/>
        <Cards modules={this.state.json}/>
      </div>;
  }
}
React.render(<App />, document.querySelector('#content'));
