<template>
	<router-view name="body"></router-view>
</template>

<script>
	export default {
	  name: 'App'
	}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  margin-top: 60px;
  width: 60%;
  margin-left: 20%;
  height: 80%;
  margin-top: 4%;
  box-shadow: 2px 2px 1px #fefefe;
  border-radius: 15px;
  background-color: rgba(254, 254, 254, .6);
}
</style>
