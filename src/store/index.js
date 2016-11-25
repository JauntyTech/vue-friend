import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    projects
  },
  strict: DEBUG
})
