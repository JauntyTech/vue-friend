<template lang="pug">
  g.state-diagram-action
    g(v-bind:transform='positionTransform')
      rect
      text {{ action.name }}
</template>

<script>
export default {
  name: 'StateDiagramAction',
  props: {
    action: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    positionTransform () {
      return `translate(0, ${this.yOffset})`
    },
    yOffset () {
      return 15 + this.index * 40
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramOrangeColor: #fcb738

$cornerRadius: 15
$height: 30
$width: 140

rect
  fill: $vuexDiagramOrangeColor
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
