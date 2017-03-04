import Card from './card'

const GridItem = styled(Card)`
  width: 300px;
  @media (max-width: 720px) {
    width: 100%;
	}
  background: ${props => props.valid ? '#FFF' : '#F2C5C5'}
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`

const Module = ({module}) => <GridItem valid={module.valid}>
  <Name>{module.name}</Name>
  <div>errors: {module.errors && module.errors.length || 0}</div>
  <div>warnings: {module.warnings && module.warnings.length || 0}</div>
  <div>recommendations: {module.recommendations && module.recommendations.length || 0}</div>
</GridItem>

export default Module
