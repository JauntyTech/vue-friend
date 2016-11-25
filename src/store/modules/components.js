import mockComponents from '../../api/mockComponents.json'
import * as getterNames from '../getterNames'

const state = {
  projectTrees: mockComponents
}

const getters = {
  [getterNames.components]: (state, getters) => (
    state.projectTrees[getters.selectedProjectId]
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
