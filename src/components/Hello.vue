<template>
  <el-card class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          <el-button>
            Core Docs
          </el-button>
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          <el-button>
            Forum
          </el-button>
        </a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">
          <el-button>
            Gitter Chat
          </el-button>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          <el-button>
            Twitter
          </el-button>
        </a>
      </li>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          <el-button>
            Docs for This Template
          </el-button>
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          <el-tag>
            vue-router
          </el-tag>
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          <el-tag>
            vuex
          </el-tag>
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          <el-tag>
            vue-loader
          </el-tag>
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          <el-tag>
            awesome-vue
          </el-tag>
        </a>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
