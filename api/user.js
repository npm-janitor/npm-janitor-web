import axios from 'axios'

const get = (username) => {
  return axios.get(`https://npm-janitor.herokuapp.com/api/${username}`)
  .then(response => {
    let modules = response.data
    modules = modules.map(module => ({
      name: module.module,
      errors: module.info.errors,
      valid: module.info.valid,
      warnings: module.info.warnings,
      recommendations: module.info.recommendations
    }))
    return {modules: modules}
  })
  .catch(error => ({error: error.response.data.message}))
}

export default get
