<template lang="pug">
  g.state-diagram-action-commits-mutation
    line(
      x1='305' v-bind:y1='sourceYOffset'
      x2='345' v-bind:y2='targetYOffset'
    )
</template>

<script>
export default {
  name: 'StateDiagramComponentCommitsMutation',
  props: {
    actionIndex: {
      type: Number,
      required: true
    },
    actionTotalCount: {
      type: Number,
      required: true
    },
    mutationIndex: {
      type: Number,
      required: true
    },
    mutationTotalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    sourceYOffset () {
      return 55 + this.actionIndex * 40
    },
    targetYOffset () {
      return 275 + (this.mutationIndex + 1 - (this.mutationTotalCount + 1) / 2) * 40
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramRedColor: #da5961

line
  stroke: $vuexDiagramRedColor
  stroke-width: 3
</style>
