<template>
  <div id="app">
    <div>
      <sidebar></sidebar>
      <div>
        <navbar></navbar>
        <div class="bdc-router-view">
          <!-- <transition name="views"> -->
            <router-view/>
          <!-- </transition> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./components/layout/sidebar/sidebar"
import navbar from "./components/layout/navbar/navbar"
export default {
  name: 'App',
  components:{
    sidebar,
    navbar
  }
}
</script>


<style src="../node_modules/@mdi/font/css/materialdesignicons.min.css"></style>

<style lang="scss" src="./app.scss"></style>

