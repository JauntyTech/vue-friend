import mockComponents from '../../api/mockComponents.json'
import * as getterNames from '../getterNames'

const state = {
  projectTrees: mockComponents
}

const getters = {
  [getterNames.components]: (state, getters) => (
    state.projectTrees[getters.selectedProjectId]
  ),

  [getterNames.isComponentsPaneWaiting]: (state, getters) => (
    getters.isProjectsPaneWaiting
  )
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
