<template lang="pug">
  g(v-bind:transform='positionTransform')
    slot
</template>

<script>
export default {
  name: 'StateDiagramGroup',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  computed: {
    positionTransform () {
      return `translate(${this.x}, ${this.y})`
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
