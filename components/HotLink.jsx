import React from 'react';
import Cards from './cards.jsx';
import Loader from 'react-loader';

class HotLink extends React.Component {
  constructor (props) {
    super(props);
    this.state = {json: [], loaded:false};
  }
  _fetch (name) {
    fetch(`https://npm-janitor.herokuapp.com/api/${name.toLowerCase()}`).
    then((data) => data.json()).
    then((json) => this.setState({json, loaded: true}));
  }
  render() {
    this._fetch(this.props.params.user);
    return  <Loader loaded={this.state.loaded}>
      <Cards modules={this.state.json}/>
    </Loader>
  }
}

HotLink.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default HotLink;
