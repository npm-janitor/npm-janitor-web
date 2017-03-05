import {keyframes} from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  border: 2px solid #d8edf6;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s linear infinite;
  opacity: ${props => props.show ? 1 : 0}
  margin: 20px auto 0;
`

export default Loader
