<template lang="pug">
  div.state-pane
    h2 State
    div.state-diagram-container
      state-diagram
</template>

<script>
import StateDiagram from './StateDiagram'

export default {
  name: 'StatePane',
  components: {
    StateDiagram
  }
}
</script>

<style lang="sass" scoped>
.state-pane
  display: flex
  flex-flow: column
  height: 100%

.state-diagram-container
  flex: 1 1 auto
  overflow: scroll
</style>
