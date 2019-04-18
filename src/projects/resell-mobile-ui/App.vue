<template>
    <div id="app">
        <div class="red">project:resell-mobile-ui</div>
        <demo></demo>
        <div class="red">
            tlogo<img :src="tLogo"/>
        </div>
        <div>
            myLogo<img :src="myLogo"/>
        </div>
        <div class="tlogo"></div>
        <div class="myLogo"></div>
    </div>
</template>

<script>
  import Demo from '../utils/demo'

  export default {
    components: {Demo},
    name: 'App',
    data() {
      return {
        tLogo: require("../../assets/demo.png"),
        myLogo: require("./assets/demo.png"),
      }
    }
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

    .tlogo,
    .myLogo {
        height: 100px;
        width: 500px;
        margin: 0 auto;
        border: 1px solid #ccc;
        background: url("./assets/demo.png");
    }

    .myLogo {
        background: url("../../assets/demo.png");
    }
</style>
