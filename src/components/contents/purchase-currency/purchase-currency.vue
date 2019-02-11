<template src="./purchase-currency.html">
    
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
     name: "currency",
     props: [
         'boxdisable',
     ],
    data(){
        
        return{
            selectedcurrency:"",
            buyrates:"",
            currno:"",
            currnote:"",
            purchase:{
                currency:"",
                buyingrate:'',
                quantity: 1,
                mode_of_purchase: 'Individual'
            },
            customer_details: {
            mode_of_id: '',
            id_no :null,
            fullname:'',
            id_expirydate: null,
            bvn: null,
            transaction_date:''
            },
            purchase_details:{
            currencyno:"",
            note: "",
            status:"available",
            currency:"",
            buyrate:"",
            },
            
        }
    },
    mounted(){
        this.getCurrencies();
    },
    
    computed:{
    ...mapGetters([
        'currencyList',
        'currencyDetails',
        'newPurchaseList',
        'bid_purchase'
    ])
    },
    methods:{
        closeCurrency(){
            this.$parent.showCurrency = false;
        },
       async getSelected(){
            this.purchase.currency = this.selectedcurrency
            await this.getCurrencyById(this.selectedcurrency.id)
            this.purchase.buyingrate = this.currencyDetails[0].daily_rates[0].buy_rate_market
           
        },
        async savedetails(){
            this.purchase_details={
            currencyno:"",
            note: "",
            status:"available",
            currency:"",
            buyrate:"",
            }

            if (!this.purchase.buyingrate || !this.purchase.currency){
  
                this.purchase.buyingrate = this.bid_purchase.buyrate
                this.purchase.currency = this.bid_purchase.currency
            }

            this.purchase_details.currencyno = this.currno
            this.purchase_details.note = this.currnote
            this.purchase_details.currency = this.purchase.currency.code
            
            this.purchase_details.buyrate = this.purchase.buyingrate

            this.newPurchaseList.push(this.purchase_details)
            
            this.$emit('cust_details', this.customer_details);
            this.$emit('purchase', this.purchase)
            
        },

        cleardetails(){
            this.emptypurchaseList();
            this.currno = '',
            this.currnote = '',
            this.purchase={
                currency:"",
                buyingrate:'',
                quantity: 1,
                mode_of_purchase: ''
            },
            this.customer_details= {
           mode_of_id: '',
            id_no :null,
            fullname:'',
            id_expirydate: null,
            bvn: null,
            transaction_date:''
            },
            this.purchase_details={
            currencyno:"",
            note: "",
            status:"available",
            currency:"",
            buyrate:"",
            }
            this.$emit('clearpurch')
        },
    ...mapActions(['getCurrencies','getCurrencyById','emptypurchaseList'])
    }
}
</script>

