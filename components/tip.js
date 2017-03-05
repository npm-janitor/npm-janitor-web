import {keyframes} from 'styled-components'

const blink = keyframes`
  0%   {opacity: 0}
  50%  {opacity: 1}
  100% {opacity: 0}
`

const Tip = styled.span`
  margin: 20px auto 0;
  height: 25px;
  color: #777;
  position: relative;
  left: -40px;
  opacity: ${props => props.show ? 1 : 0};
  animation: ${props => props.blink ? blink : 'none'} 2s linear infinite;
`

export default Tip
