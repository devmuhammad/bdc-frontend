<template src="./purchase.html">
    
</template>

<script>
import Customerinfo from '../../contents/purchase-customer/purchase-customer'
import Currency from '../../contents/purchase-currency/purchase-currency'
export default {
    data(){
        return{
            showClient:false,
            showCurrency:false,
        }
    },
    components:{
        'purchase-client': Customerinfo,
        'purchase-currency': Currency,
    },
    methods:{
        openClient(){
            this.showClient = !this.showClient;
            this.showCurrency = false;
        },
        openCurrency(){
            this.showCurrency = !this.showCurrency;
            this.showClient = false;
        }
    }
}
</script>

