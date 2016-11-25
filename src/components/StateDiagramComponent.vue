<template lang="pug">
  g.state-diagram-component
    g(v-bind:transform='positionTransform')
      rect
      text {{ component.name }}
</template>

<script>
export default {
  name: 'StateDiagramComponent',
  props: {
    component: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
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
      return (this.index + 1 - (this.totalCount + 1) / 2) * 40
    }
  }
}
</script>

<style lang="sass" scoped>
$vuexDiagramGreenColor: #3ab882

$cornerRadius: 15
$height: 30
$width: 140

rect
  fill: $vuexDiagramGreenColor
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
