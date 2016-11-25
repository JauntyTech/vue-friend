<template lang="pug">
  g.state-diagram-component-dispatches-action
    line(
      x1='135' v-bind:y1='sourceYOffset'
      x2='175' v-bind:y2='targetYOffset'
    )
</template>

<script>
export default {
  name: 'StateDiagramComponentDispatchesAction',
  props: {
    actionIndex: {
      type: Number,
      required: true
    },
    actionTotalCount: {
      type: Number,
      required: true
    },
    componentIndex: {
      type: Number,
      required: true
    },
    componentTotalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    sourceYOffset () {
      return 275 + (this.componentIndex + 1 - (this.componentTotalCount + 1) / 2) * 40
    },
    targetYOffset () {
      return 55 + this.actionIndex * 40
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramOrangeColor: #fcb738

line
  stroke: $vuexDiagramOrangeColor
  stroke-width: 3
</style>
</style>
