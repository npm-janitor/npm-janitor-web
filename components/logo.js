const StyledImage = styled.img`
  height: ${props => props.big ? '75px' : '50px'}
  transition: height 1s;
`

const Logo = (props) => <StyledImage big={props.big} src="static/logo.png"/>

export default Logo
