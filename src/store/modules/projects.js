import api from '../../api/projects'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  all: [],
  isGetting: false,
  selectedId: null
}

const getters = {
  [getterNames.isProjectsPaneWaiting]: state => state.isGetting,
  [getterNames.projects]: state => state.all,
  [getterNames.selectedProjectId]: state => state.selectedId
}

const actions = {
  async [actionTypes.GET_PROJECTS] ({ commit }) {
    commit(mutationTypes.GET_PROJECTS_REQUEST)
    commit(mutationTypes.UPDATE_PROJECTS, await api.getProjects())
    commit(mutationTypes.GET_PROJECTS_SUCCESS)
  }
}

const mutations = {
  [mutationTypes.GET_PROJECTS_REQUEST] (state) {
    state.isGetting = true
  },

  [mutationTypes.GET_PROJECTS_SUCCESS] (state) {
    state.isGetting = false
  },

  [mutationTypes.SELECT_PROJECT] (state, newSelectedProjectId) {
    state.selectedId = newSelectedProjectId
  },

  [mutationTypes.UPDATE_PROJECTS] (state, newProjects) {
    state.all = newProjects
    state.selectedId = state.all[0].id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
