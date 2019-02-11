<template src="./login.html">
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { HalfCircleSpinner } from "epic-spinners";

export default {
    data(){
        return{
            usercred:{
                email:"",
                password:""
            },
            validationmsg:"",
            loading:false
        }
    },
    computed:{
    ...mapGetters([
        'loggedinUser',
        'errmsg',
        'isloggedIn'
    ])
    },
    components: { HalfCircleSpinner},
    methods:{

        remVal(){
            this.validationmsg = ""
        },

        validateInput(){
            this.loading = true
            if (this.usercred.email === "" || this.usercred.password === ""){
                this.validationmsg = "Kindly input your  credentials !!!"
            } else this.loginUser();
            // this.logoutUser() 
        },

       async loginUser(){
        
        await this.Login(this.usercred);
            
            if(!this.isloggedIn) {
                this.loading = false
                this.validationmsg = "Invalid Username/Password"
            }else this.loading = false
        },

        ...mapActions([
            'Login','logoutUser'
        ])
    }
}


</script>