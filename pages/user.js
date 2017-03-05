import Header from '../components/header'
import Module from '../components/module'
import getModules from '../api/user'
import Grid from '../components/grid'

const User = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {fullHeader: true}
  }

  static async getInitialProps (context) {
    let user = context.query.name
    return getModules(user)
  }

  componentDidMount () {
    this.setState({fullHeader: false})
  }

  render() {
    return <div>
      <Header full={this.state.fullHeader} username={this.props.url.query.name}/>
      <Grid>
        {this.props.modules.map((module, index) => <Module key={index} module={module}/>)}
      </Grid>
    </div>
  }
}

export default User
