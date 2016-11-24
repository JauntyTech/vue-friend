<template lang="pug">
  el-menu.header-pane(theme='dark')
    h1
      span.vue-color Vue
      | &thinsp;
      span.friend-color Friend
      img.logo(src='../assets/logo.png')
</template>

<script>
export default {
  name: 'HeaderPane'
}
</script>

<style lang="sass" scoped>
$friendColor: #ffdd67
$lightSilver: #99a9bf
$vueColor: #41b883

.friend-color
  color: $friendColor

.header-pane
  border-radius: 0
  margin: 0
  color: $lightSilver
  text-align: center

.logo
  height: 40px
  margin: 0 10px 10px 10px
  vertical-align: bottom

.vue-color
  color: $vueColor
</style>
