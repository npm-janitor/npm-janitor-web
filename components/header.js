const Header = styled.div`
  height: 50px;
  background: #3EB1D3;
  line-height: 50px;
  text-align: center;
`

const Logo = styled.img`
  height: 50px;
`

export default () => <Header>
  <Logo src="static/logo.png"/>
</Header>
