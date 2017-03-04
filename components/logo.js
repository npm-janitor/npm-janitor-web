const StyledImage = styled.img`
  height: ${props => props.full ? '75px' : '50px'}
`

const Logo = () => <StyledImage src="static/logo.png"/>

export default Logo
