const width = 300 + 40 // width + padding

const Bar = styled.div`
  height: 5px;
  width: 100%;
  background: #EEE;

  position: absolute;
  bottom: 0;
  left: 0;


  box-sizing: border-box;
  border-left: ${props => props.score/10 * width}px solid;
  border-left: ${props => props.score === 0 ? width : ''}px solid;

  border-color: ${props => props.score > 6 ? '#27ae60': '#f39c12'};
  border-color: ${props => props.score === 0 ? '#c0392b': ''};

  border-radius: 0 0 2px 2px;
`

const Score = ({module}) => {
  let score = 10
  score -= module.warnings.length
  if (module.errors.length) score = 0
  return <Bar score={score}/>
}

export default Score
