<template lang="pug">
  div.projects-pane
    h2 Projects
    div.menu-container
      el-menu(
        v-bind:default-active='String(selectedProjectId)'
        v-on:select='SELECT_PROJECT'
      )
        el-menu-item(
          v-for='project in projects'
          v-bind:index='String(project.id)'
        )
          | {{ project.name }}
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import * as actionTypes from '../store/actionTypes'
import * as getterNames from '../store/getterNames'
import * as mutationTypes from '../store/mutationTypes'

export default {
  name: 'ProjectsPane',
  computed: mapGetters([
    getterNames.projects,
    getterNames.selectedProjectId
  ]),
  methods: {
    ...mapActions([
      actionTypes.GET_PROJECTS
    ]),
    ...mapMutations([
      mutationTypes.SELECT_PROJECT
    ])
  },
  mounted () {
    this.GET_PROJECTS()
  }
}
</script>

<style lang="sass" scoped>
$extraLightGray: #eff2f7

.projects-pane
  background-color: $extraLightGray
  display: flex
  flex-flow: column
  height: 100%

.projects-pane .menu-container
  flex: 1 1 auto
  overflow: scroll

.projects-pane .el-menu
  text-align: left

.projects-pane .el-menu-item
  padding: 0 30px
</style>
