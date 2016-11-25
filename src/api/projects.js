import mockProjects from './mockProjects.json'

export default {
  getProjects () {
    return new Promise((resolve, reject) =>
      setTimeout(
        () => resolve(mockProjects),
        1000
      )
    )
  }
}
