<template src="./navbar.html">
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data(){
        return{
            showSidebar: true,
            msg:" Sidebar"
        }
    },
    computed:{
        ...mapGetters([
            'isloggedIn',
            'loggedinUser'
        ])
    },
    methods:{
        toggleSidebar(){
            this.showSidebar = !this.showSidebar;

            let view = document.getElementsByClassName('bdc-router-view');
            let sidebar = document.getElementsByClassName('bdc-sidebar');
            let navbar = document.getElementsByClassName('bdc-navbar');

            if(!this.showSidebar){
                navbar[0].style.setProperty('width','100%');
                navbar[0].style.setProperty('margin-left','0');
                sidebar[0].style.setProperty('visibility','hidden');
                sidebar[0].style.setProperty('width','0');
                view[0].style.setProperty('width','100%');
                view[0].style.setProperty('margin-left','0px');
            }

            else if(this.showSidebar){
                navbar[0].style.setProperty('width','82%');
                navbar[0].style.setProperty('margin-left','18%');
                sidebar[0].style.setProperty('width','18%');
                sidebar[0].style.setProperty('visibility','visible');
                view[0].style.setProperty('width','82%');
                view[0].style.setProperty('margin-left','18%');
            }
        },
        logout(){
            this.logoutUser()
        },
         ...mapActions([
            'logoutUser'
        ])
    }
}
</script>