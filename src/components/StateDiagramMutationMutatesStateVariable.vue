<template lang="pug">
  g.state-diagram-mutation-mutates-state-variable
    line(
      x1='345' v-bind:y1='sourceYOffset'
      x2='305' v-bind:y2='targetYOffset'
    )
</template>

<script>
export default {
  name: 'StateDiagramMutationMutatesStateVariable',
  props: {
    mutationIndex: {
      type: Number,
      required: true
    },
    mutationTotalCount: {
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
      return 275 + (this.mutationIndex + 1 - (this.mutationTotalCount + 1) / 2) * 40
    },
    targetYOffset () {
      return 495 - (this.stateVariableTotalCount - (this.stateVariableIndex + 1)) * 40
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramPurpleColor: #8e7cb9

line
  stroke: $vuexDiagramPurpleColor
  stroke-width: 3
</style>
