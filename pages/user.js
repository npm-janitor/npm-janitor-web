import Header from '../components/header'
import Module from '../components/module'
import getModules from '../api/user'
import Grid from '../components/grid'

const User = class extends React.Component {
  static async getInitialProps (context) {
    let user = context.query.name
    return getModules(user)
  }
  render() {
    return <div>
      <Header username={this.props.url.query.name}/>
      <Grid>
        {this.props.data.map((module, index) => <Module key={index} module={module}/>)}
      </Grid>
    </div>
  }

}

export default User
