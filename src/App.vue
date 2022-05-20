<script>
  import Dashboard from './components/Dashboard.vue';
  export default{
    components: {Dashboard},
    data() {
        return {
            name: "Sanjeev",
        }
    },
}
</script>

<template>
  <Dashboard/>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
.title{
  color: #000;
}
</style>
