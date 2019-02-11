<template src="./purchase-customer.html">

    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props:{
        
    },
    data(){
        return{
            currnote:"",
            purchdetails:{},
            selectedcurrency:"",
            bid_details: {
            currency:"",
            buyingrate:"",
            note:"",
            starting_no:"",
            transaction_date:'',
            mode_of_purchase:"",
            ending_no:"",
            currency_prefix:"",
            currency_suffix:"",
            quantity: 1
            },

        }
    },
    computed:{
        ...mapGetters([
        'currencyList',
        'currencyDetails',
        'newPurchaseList',
        'bid_purchase'
    ])
    },
    mounted(){
        this.getCurrencies();
    },
    methods:{
        closeClient(){
            this.$parent.showClient = false;
        },

        async getSelected(){
            this.bid_details.currency = this.selectedcurrency
            await this.getCurrencyById(this.selectedcurrency.id)
            this.bid_details.buyingrate = this.currencyDetails[0].daily_rates[0].buy_rate_official
        },

        async save_details(){

            this.$emit('bid_details', this.bid_details);
        },

        async generateCurr(){
            // const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start);
            // const currNums = range(this.bid_details.starting_no, this.bid_details.ending_no)
        this.emptypurchaseList();
        
        this.bid_details.quantity =  this.bid_details.ending_no - this.bid_details.starting_no
        this.bid_details.quantity++
        let startnum = this.bid_details.starting_no

        for (let i = 0; i < this.bid_details.quantity; i++) {
        const currNums = startnum++

        this.purchdetails = {
            currencyno: this.bid_details.currency_prefix + currNums + this.bid_details.currency_suffix,
            note: this.bid_details.note,
            status: "available",
            currency: this.bid_details.currency.code,
            buyrate: this.bid_details.buyingrate
        }
        
        this.newPurchaseList.push(this.purchdetails)
    }
        
        Object.assign(this.bid_purchase, this.purchdetails)
        
        this.$emit('bid_details', this.bid_details);
        },

        clear_bid(){
            this.$emit('clear_bid');
        },
        ...mapActions(['getCurrencies','getCurrencyById','emptypurchaseList'])
    }
}
</script>

