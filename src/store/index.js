import Vue from 'vue'
import Vuex from 'vuex'
import components from './modules/components'
import projects from './modules/projects'
import stateDiagram from './modules/stateDiagram'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    components,
    projects,
    stateDiagram
  },
  strict: DEBUG
})
