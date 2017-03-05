import axios from 'axios'

const get = (username) => {
  return axios.get(`https://npm-janitor-api.now.sh/${username}`)
  .then(response => {
    let modules = response.data
    modules = modules.map(module => ({
      name: module.module,
      valid: module.info.valid,
      errors: module.info.errors || [],
      warnings: module.info.warnings || [],
      suggestions: module.info.recommendations || []
    }))
    return {modules: modules}
  })
  .catch(error => ({error: error.response.data.message}))
}

export default get
