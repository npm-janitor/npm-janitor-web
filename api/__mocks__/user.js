const get = () => new Promise(resolve => {
  resolve({modules: [{
    name: 'npm-janitor-web',
    valid: true,
    errors: [],
    warnings: ['Add recommended field: contributors'],
    suggestions: ['Add optional field: homepage']
  }]})
})

export default get
