let modules = [{
  name: 'npm-janitor-web',
  valid: true,
  errors: [],
  warnings: ['Add recommended field: contributors'],
  suggestions: ['Add optional field: homepage']
}]

const get = username => new Promise(resolve => {
  if (username) resolve({modules: modules})
  else resolve({modules: []})
})

export default get
