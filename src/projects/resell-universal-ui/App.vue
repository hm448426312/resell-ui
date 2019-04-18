<template>
    <div id="app">
        <div class="red">project:resell-universal-ui</div>
        <demo></demo>
    </div>
</template>

<script>
  import Demo from '../utils/demo'

  export default {
    components: {Demo},
    name: 'App'
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
