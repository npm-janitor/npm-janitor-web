import React from 'react';
import { Router, Route, Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import Loader from 'react-loader';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Cards from './components/cards.jsx';
import HotLink from './components/HotLink.jsx';
import DebounceInput from 'react-debounce-input';

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {json: [], loaded: true};
  }

  _handleClick (name) {
    this.setState({loaded: false});
    this._fetch(name);
  }

  _fetch (name) {
    fetch(`https://npm-janitor.herokuapp.com/api/${name.toLowerCase()}`).
    then((data) => data.json()).
    then((json) => this.setState({json, loaded: true}));
  }

  render () {
        return <div>
        <GitHubForkRibbon href="https://github.com/npm-janitor/npm-janitor-web"
                               target="_blank"
                               position="right">
               Fork me on GitHub
             </GitHubForkRibbon>
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
          <Loader loaded={this.state.loaded}>
            <Cards modules={this.state.json}/>
          </Loader>
      </div>;
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

React.render((
  <Router>
    <Route path="/" component={App}/>
    <Route path="/:user" component={HotLink} />
  </Router>
), document.querySelector('#content'));
