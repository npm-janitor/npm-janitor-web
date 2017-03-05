import Card from './card'
import Link from './link'
import Bold from './bold'

const GridItem = styled(Card)`
  width: 300px;
  @media (max-width: 720px) {
    width: 100%;
	}
  background: ${props => props.valid ? '#FFF' : '#F2C5C5'}
`

const Module = ({module}) => <GridItem valid={module.valid}>
  <Link href={`https://npmjs.com/${module.name}`} target="blank">
    <Bold>{module.name}</Bold>
  </Link>
  <div>errors: {module.errors && module.errors.length || 0}</div>
  <div>warnings: {module.warnings && module.warnings.length || 0}</div>
  <div>recommendations: {module.recommendations && module.recommendations.length || 0}</div>
</GridItem>

export default Module
