import Header from '../components/header'
import Module from '../components/module'
import getModules from '../api/user'
import Grid from '../components/grid'

const User = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {fullHeader: true, user: props.url.query.name}
  }

  static async getInitialProps (context) {
    let user = context.query.name
    return getModules(user)
  }

  componentDidMount () {
    this.setState({fullHeader: false, loading: false})
  }

  render() {
    return <div>
      <Header
        username={this.state.user}
        full={this.state.fullHeader}
        loading={this.state.loading}
      />
      <Grid>
        {this.props.modules.map((module, index) => {
          return <Module key={index} module={module}/>
        })}
      </Grid>
    </div>
  }
}

export default User
