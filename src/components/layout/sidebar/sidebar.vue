<template src="./sidebar.html">
    
</template>

<script>
export default {
    data(){
    const sidebarMenu = [
        {name:"Dashboard", icon:"mdi mdi-blur mdi-20x", link:"/dashboard"},
        {name:"Purchase", icon:"mdi mdi-account-arrow-left mdi-20x", link:"/"},
        {name:"Selling", icon:"mdi mdi-account-arrow-right mdi-20x", link:"/selling"},
    ]
        return{
            msg:" Sidebar",
            sidebarMenu,
        }
    }    
}
</script>