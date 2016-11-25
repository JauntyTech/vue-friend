<template lang="pug">
  div#app
    header-pane
    el-row#content-row
      el-col(
        v-bind:xs='24' v-bind:md='4'
        v-loading.body='isProjectsPaneWaiting'
      )
        projects-pane
      el-col(v-bind:xs='24' v-bind:md='10')
        components-pane
      el-col(v-bind:xs='24' v-bind:md='10')
        vuex-pane
</template>

<script>
import { mapGetters } from 'vuex'
import * as getterNames from './store/getterNames'
import ComponentsPane from './components/ComponentsPane'
import HeaderPane from './components/HeaderPane'
import ProjectsPane from './components/ProjectsPane'
import VuexPane from './components/VuexPane'

export default {
  name: 'app',
  computed: mapGetters([
    getterNames.isProjectsPaneWaiting
  ]),
  components: {
    ComponentsPane,
    HeaderPane,
    ProjectsPane,
    VuexPane
  }
}
</script>

<style lang="sass">
html, body
  height: 100%
  margin: 0

#app
  color: #2c3e50
  display: flex
  flex-flow: column
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  height: 100%
  text-align: center
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app .header-pane
  flex: 0 1 auto

#content-row
  display: flex
  flex: 1 1 auto
  flex-flow: row
  flex-wrap: wrap

#content-row > .el-col
  flex: 1 1 auto

#content-row > .el-col > div
  height: 100%

#content-row > .el-col > div > h2
  margin: 0
  padding: 20px 0
</style>
