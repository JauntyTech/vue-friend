import mockStateDiagram from '../../api/mockStateDiagram.json'
import * as getterNames from '../getterNames'

const state = {
  stateDiagram: mockStateDiagram
}

const getters = {
  [getterNames.isStatePaneWaiting]: (state, getters) => (
    getters.isProjectsPaneWaiting
  ),

  [getterNames.stateDiagramActions]: (state, getters) => {
    if (!getters.selectedProjectId) return null
    return state.stateDiagram[getters.selectedProjectId].actions
  },

  [getterNames.stateDiagramComponents]: (state, getters) => {
    if (!getters.selectedProjectId) return null
    return state.stateDiagram[getters.selectedProjectId].components
  },

  [getterNames.stateDiagramMutations]: (state, getters) => {
    if (!getters.selectedProjectId) return null
    return state.stateDiagram[getters.selectedProjectId].mutations
  },

  [getterNames.stateDiagramStateVariables]: (state, getters) => {
    if (!getters.selectedProjectId) return null
    return state.stateDiagram[getters.selectedProjectId].stateVariables
  }
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
