import Card from './card'
import Link from './link'
import Heavy from './heavy'
import Score from './score'
import Tips from './tips'

const GridItem = styled(Card)`
  width: 300px;
  position: relative;
  @media (max-width: 720px) {
    width: 100%;
	}
  background: ${props => props.valid ? '#FFF' : '#F2C5C5'}
  line-height: 1.5;
`

const Module = ({module}) => <GridItem valid={module.valid}>
  <Link href={`https://npmjs.com/${module.name}`} target="blank">
    <Heavy>{module.name}</Heavy>
  </Link>
  <Tips  module={module}/>
  <Score module={module}/>
</GridItem>

export default Module
