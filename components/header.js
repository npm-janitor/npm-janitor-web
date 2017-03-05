import Router from 'next/router'
import Logo from './logo'
import Input from './input'

const timingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)'

const Wrapper = styled.div`
  height: ${props => props.full ? '100vh' : '200px'};
  background: #3EA6D6;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: height 1s ${timingFunction};
`

const Header = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: props.username || '',
      full: props.full
    }
  }

  componentWillReceiveProps (props) {
    this.setState({full: props.full})
  }

  onChange = event => this.setState({username: event.target.value})

  onKeyUp = event => {
    if (event.which === 13) {
      Router.push(`/user?name=${this.state.username}`)
      if (!this.state.full) this.setState({full: true})
      /*
        The user page is rendered on the server,
        which takes a little time, we can animate
        the header to give a perception of better transition
      */
    }
  }

  render () {
    return <Wrapper full={this.state.full}>
      <div>
        <Logo big={this.props.full}/>
        <div>
          <Input
            type="text" autoFocus placeholder="enter your npm username"
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
            defaultValue={this.props.username}
          />

        </div>
      </div>
    </Wrapper>
  }
}

export default Header
