<template lang="pug">
  div.vue-pane
    h2 Components
    div.tree-container
      el-tree(
        v-bind:data='components'
        v-bind:props='treeProps'
        v-bind:default-expand-all='true'
      )
</template>

<script>
import { mapGetters } from 'vuex'
import * as getterNames from '../store/getterNames'

export default {
  name: 'ComponentsPane',
  data () {
    return {
      treeProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: mapGetters([
    getterNames.components
  ])
}
</script>

<style lang="sass" scoped>
$extraLightGray: #eff2f7

.vue-pane
  border-right: 3px solid $extraLightGray
  display: flex
  flex-flow: column
  height: 100%

.vue-pane .tree-container
  flex: 1 1 auto
  overflow: scroll

.vue-pane .el-tree
  border: none
  margin: 0 100px
  text-align: left
</style>
