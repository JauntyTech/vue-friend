<template lang="pug">
  div.projects-pane
    h2 Projects
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
import { mapGetters, mapMutations } from 'vuex'
import * as getterNames from '../store/getterNames'
import * as mutationTypes from '../store/mutationTypes'

export default {
  name: 'ProjectsPane',
  computed: mapGetters([
    getterNames.projects,
    getterNames.selectedProjectId
  ]),
  methods: mapMutations([
    mutationTypes.SELECT_PROJECT
  ])
}
</script>

<style lang="sass" scoped>
$extraLightGray: #eff2f7

.projects-pane
  background-color: $extraLightGray

.projects-pane .el-menu
  text-align: left

.projects-pane .el-menu-item
  padding: 0 30px
</style>
