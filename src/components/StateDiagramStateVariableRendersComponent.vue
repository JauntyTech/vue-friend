<template lang="pug">
  g.state-diagram-state-variable-renders-component
    line(
      x1='175' v-bind:y1='sourceYOffset'
      x2='135' v-bind:y2='targetYOffset'
    )
</template>

<script>
export default {
  name: 'StateDiagramStateVariableRendersComponent',
  props: {
    componentIndex: {
      type: Number,
      required: true
    },
    componentTotalCount: {
      type: Number,
      required: true
    },
    stateVariableIndex: {
      type: Number,
      required: true
    },
    stateVariableTotalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    sourceYOffset () {
      return 495 - (this.stateVariableTotalCount - (this.stateVariableIndex + 1)) * 35
    },
    targetYOffset () {
      return 275 + (this.componentIndex + 1 - (this.componentTotalCount + 1) / 2) * 35
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramGreenColor: #3ab882

line
  stroke: $vuexDiagramGreenColor
  stroke-width: 2
</style>
