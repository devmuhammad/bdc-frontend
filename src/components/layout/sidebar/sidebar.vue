<template src="./sidebar.html">
    
</template>

<script>
export default {
    data(){
    const sidebarMenu = [
        {name:"Dashboard", icon:"mdi mdi-view-dashboard mdi-20x", link:"/"},
        {name:"Xchange Rate", icon:"mdi mdi-percent mdi-20x", link:"/xchange", clicked:'openxchange()'},
        {name:"Purchase", icon:"mdi mdi-cash-register mdi-20x", link:"/purchase"},
        {name:"Selling", icon:"mdi mdi-sale mdi-20x", link:"/selling"},
        {name:"Reports", icon:"mdi mdi-receipt mdi-20x", link:"/selling"},
    ]
        return{
            msg:" Sidebar",
            sidebarMenu,
        }
    },
    methods: {
        
        openxchange(e){
            console.log("fireddddd")
      e.preventDefault()
      store.commit('setXchangeModal')
      history.pushState('', 'Xchange-Rate', '/xchange');

    }
        }
    }
</script>