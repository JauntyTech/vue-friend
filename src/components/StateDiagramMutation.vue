<template lang="pug">
  g.state-diagram-mutation
    g(v-bind:transform='positionTransform')
      rect
      text {{ mutation.name }}
</template>

<script>
export default {
  name: 'StateDiagramMutation',
  props: {
    index: {
      type: Number,
      required: true
    },
    mutation: {
      type: Object,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    positionTransform () {
      return `translate(0, ${this.yOffset})`
    },
    yOffset () {
      return (this.index + 1 - (this.totalCount + 1) / 2) * 35
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramRedColor: #da5961

$cornerRadius: 15
$height: 20
$width: 140

rect
  fill: $vuexDiagramRedColor
  height: $height + px
  width: $width + px
  x: - $width / 2 + px
  y: - $height / 2 + px
  rx: $cornerRadius + px
  ry: $cornerRadius + px

text
  alignment-baseline: middle
  fill: white
  font-size: 8pt
  text-anchor: middle
</style>
