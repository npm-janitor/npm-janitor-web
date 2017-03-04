import Logo from './logo'
import Input from './input'

const Wrapper = styled.div`
  height: ${props => props.full ? '100vh' : '200px'};
  background: #3EA6D6;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {username: props.username || ''}
  }

  onChange = event => this.setState({username: event.target.value})

  onKeyUp = event => {
    if (event.which === 13) location.href = `/user?name=${this.state.username}`
  }

  render () {
    return <Wrapper full={this.props.full}>
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
