<template lang="pug">
  div.projects-pane
    h2 Projects
    el-menu(default-active='0')
      el-menu-item(
        v-for='(project, projectIndex) in projects'
        v-bind:index='String(projectIndex)'
      )
        | {{ project.name }}
</template>

<script>
export default {
  name: 'ProjectsPane',
  data () {
    return {
      projects: [
        {name: 'Project 1'},
        {name: 'Project 2'},
        {name: 'Project 3'}
      ]
    }
  }
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
