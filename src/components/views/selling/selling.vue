<template src="./selling.html">
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data(){
        return{
             boxdisable:false,
             selectedcurrency:"",
             currno:[],          
             currnote:"",
             amount:0,
             sale_deet:{
                 id:'',
                currencyno:'',
                note:"",
                currency:"",
                soldrate:"",
                status:""
             },
            sales:{
                buyingrate:'',
                soldrate:'',
                // main:0,
                quantity: 0,
                mode_of_id: '',
                fullname: "",
                sale_detail:[],
                id_no :null,
                id_expirydate: null,
                bvn: null,
                totalamount:0,
                user:"",
                transaction_date:"",
                system_date:new Date().toISOString().slice(0, 19).replace('T', ' '),
            }
        }
    },
    mounted(){
        this.getCurrencies();
        this.getPurchaseDetailList("USD")
    },
    computed:{
    ...mapGetters([
        'currencyList',
        'currencyDetails',
        'purchdeetList',
        'sellingList',
        'salesList',
        'saleadded',
        'addsalesview',
        'loggedinUser'
    ])
    },
    mounted(){
        this.getSales();
        this.getCurrencies()
        this.saletrue();
    },
    methods:{
         async getSelected(){
            this.sales.currency = this.selectedcurrency.id
            await this.getCurrencyById(this.selectedcurrency.id)
            this.sales.buyingrate = this.currencyDetails[0].daily_rates[0].buy_rate_market
            this.sales.soldrate = this.currencyDetails[0].daily_rates[0].sell_rate_market
            this.getPurchaseDetailList(this.selectedcurrency.code)
        },
        removenotif(){
            // this.addcomplete = false
            this.changesalestatus();
        },
        changeView(){
            this.changesaleView();
        },
        getmultiSelect (){
            // console.log(this.currno);
           
        },
        saveSales(){

             for (let i=0; i< this.currno.length; i++){
                 this.sale_deet={
                id:'',
                currencyno:'',
                note:"",
                currency:"",
                soldrate:"",
                status:""
             }
                 this.sale_deet.id = this.currno[0].id
                 this.sale_deet.currencyno = this.currno[i].currencyno
                 this.sale_deet.note = this.currno[i].note
                 this.sale_deet.currency = this.currno[i].currency
                 this.sale_deet.status = "sold"
                 this.sale_deet.soldrate =  this.sales.soldrate

                 this.sellingList.push(this.sale_deet)
                 
             }
            // this.sellingList.push(this.currno)
            
            this.sales.quantity = this.sellingList.length

            for (let i=0; i< this.sellingList.length; i++){
                 
                this.amount += this.sellingList[i].note * this.sales.soldrate
              
            }
            this.sales.totalamount = this.amount.toFixed(2)

            

            // console.log(this.sales)
        },

        async submitSale(){
            this.sales.sale_detail = this.sellingList
            this.sales.user = this.loggedinUser.id
            await this.addNewSale(this.sales)
            await this.getSales()
            this.$refs.table.refresh();

            setTimeout(this.removenotif, 5000)
            this.changeView();
            this.emptySales();
             this.amount = 0
             this.sales.totalamount = 0
        },

        cleardetails(){
            this.boxdisable = false
            this.emptySales();

            this.amount = 0
            this.sales.mode_of_id = ""
            this.sales.id_no = null
            this.sales.id_expirydate = null
            this.sales.bvn = null
            this.sales.currency = ""
            this.sales.buyingrate = ""
            this.sales.quantity = 0
            this.sales.fullname = ""
            this.sales.transaction_date = ""
           this.sales.totalamount = 0

        },
        ...mapActions(['getCurrencies',
        'getCurrencyById',
        'emptySales',
        'getPurchaseDetailList',
        'getSales',
        'addNewSale',
        'changesalestatus',
        'changesaleView',
        'saletrue'
        ])
    }
}
</script>

