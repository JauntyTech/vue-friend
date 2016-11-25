import mockProjects from '../../api/mockProjects.json'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  all: mockProjects,
  selectedId: null
}

const getters = {
  [getterNames.projects]: state => state.all,
  [getterNames.selectedProjectId]: state => state.selectedId
}

const actions = {
}

const mutations = {
  [mutationTypes.SELECT_PROJECT] (state, newSelectedProjectId) {
    state.selectedId = newSelectedProjectId
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
