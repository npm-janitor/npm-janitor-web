const timingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)'

const Input = styled.input`
  border: none;
  font-size: 18px;
  padding: 20px;
  width: ${props => props.full ? '80vw' : '30vw'}
  margin: 10px;
  margin-top: -3px;
  outline: none;
  color: #333;
  font-family: 'Lato', sans-serif;
  transition: width 1s ${timingFunction};
  @media (max-width: 720px) {
    width: 80vw;
	}
`

export default Input
