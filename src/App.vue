<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  background: #231F20;
  color: #C3B59B;
}
p {
  margin: 0;
  padding: 0;
}
a {
  color: #42b983;
}
#app {
  padding: 15px;
}
</style>
