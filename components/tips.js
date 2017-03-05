import pluralize from 'pluralize'

const Code = styled.span`
  font-family: monospace;

  color: #777;
`

const getTipsBlock = tips => {
  return <span>
    <Code>{
      tips
      .map(tip => tip.replace('Missing recommended field: ', ''))
      .map(tip => tip.replace('Missing optional field: ', ''))
      .join(', ')
    }</Code>
    <br/><br/>
  </span>
}

const Tips = ({module}) => <div>

  {module.errors.length ? <div>
    <div> {module.errors.length} {pluralize('error', module.errors.length)}</div>
    {module.errors.map(error => <div>- {error}</div>)}
    <br/>
  </div> : ''}

  {module.warnings.length ? <div>
    Add recommended {pluralize('field', module.warnings.length)}: { }
    {getTipsBlock(module.warnings)}
  </div> : ''}

  {module.suggestions.length ? <div>
    Add optional {pluralize('field', module.suggestions.length)}: { }
    {getTipsBlock(module.warnings)}
  </div> : ''}
</div>

export default Tips
