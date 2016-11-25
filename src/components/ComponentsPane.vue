<template lang="pug">
  div.vue-pane
    h2 Components
    el-tree(
      v-bind:data='data'
      v-bind:default-expand-all='true'
      @node-click='handleNodeClick'
    )
</template>

<script>
export default {
  name: 'ComponentsPane',
  data () {
    return {
      data: [
        {
          label: 'Component A',
          children: [
            {label: 'Component A1'}
          ]
        },
        {
          label: 'Component B',
          children: [
            {label: 'Component B1'},
            {label: 'Component B1'}
          ]
        },
        {
          label: 'Component C',
          children: [
            {label: 'Component C1'},
            {
              label: 'Component C2',
              children: [
                {label: 'Component C2a'},
                {label: 'Component C2b'}
              ]
            },
            {label: 'Component C3'}
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log('Component click:', data)
    }
  }
}
</script>

<style lang="sass" scoped>
$extraLightGray: #eff2f7

.vue-pane
  border-right: 3px solid $extraLightGray

.vue-pane .el-tree
  border: none
  margin: 0 50px
  text-align: left
</style>
