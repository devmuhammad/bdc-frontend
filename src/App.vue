<template>
  <div id="app">
    <div v-if="isloggedIn == false">
      <login></login>
    </div>
    <div v-if="isloggedIn == true">
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
import login from "./components/views/login/login"
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  data(){
        return{
          
        }
    },
  computed: {
...mapGetters([
  'isloggedIn'
])
  
  },
  components:{
    sidebar,
    navbar,
    login,
  }
}
</script>


<style src="../node_modules/@mdi/font/css/materialdesignicons.min.css"></style>

<style lang="scss" src="./app.scss"></style>

