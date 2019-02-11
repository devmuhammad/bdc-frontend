<template src="./purchases.html">

    
</template>

<script>

import { mapActions,mapGetters } from 'vuex';

export default {
    data(){
        return{
           
        }
    },
    computed:{
        ...mapGetters([
            'purchaseList'
        ])
    },

    mounted(){
        this.getPurchases();
    },
    methods:{
        deletepurchase(purchId){
            this.deletePurchase(purchId)
        },
        ...mapActions([
            'getPurchases',
            'deletePurchase'
        ])
    }
}

</script>