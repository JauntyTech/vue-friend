<template lang="pug">
  div#app
    header-pane
</template>

<script>
import HeaderPane from './components/HeaderPane'

export default {
  name: 'app',
  components: {
    HeaderPane
  }
}
</script>

<style lang="sass">
html, body
  height: 100%
  margin: 0

#app
  color: #2c3e50
  display: flex
  flex-flow: column
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  height: 100%
  text-align: center
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app .header-pane
  flex: 0 1 auto
</style>
