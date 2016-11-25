<template lang="pug">
  g.state-diagram-state-variable
    g(v-bind:transform='positionTransform')
      rect
      text {{ stateVariable.name }}
</template>

<script>
export default {
  name: 'StateDiagramStateVariable',
  props: {
    index: {
      type: Number,
      required: true
    },
    stateVariable: {
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
      return -15 - (this.totalCount - (this.index + 1)) * 35
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramPurpleColor: #8e7cb9

$cornerRadius: 15
$height: 20
$width: 140

rect
  fill: $vuexDiagramPurpleColor
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
