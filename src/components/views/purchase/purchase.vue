<template src="./purchase.html">
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Customerinfo from '../../contents/purchase-customer/purchase-customer'
import Currency from '../../contents/purchase-currency/purchase-currency'
import Purchases from '../../contents/purchases/purchases'
import { Tab } from '../../../mixins/dashboardTabs'

export default {
    data(){
        return{
            showClient:false,
            showCurrency:false,
            addcomplete:false,
            addcompdlete:false,
            customer_details: {},
            boxdisable:false,
            purchbid:false,
            amount:0,
            amt:[],
            tabpurchList:[],
            currCode:"",
            purchasemain:{},
            currRate:"",
            purchases:{            
                currency:"",   
                buyingrate:'',
                // main:0,
                quantity: '',
                mode_of_id: '',
                fullname: "CBN/Bank",
                purchase_detail:[],
                id_no :null,
                id_expirydate: null,
                mode_of_purchase:"",
                bvn: null,
                totalamount:0,
                user:"",
                transaction_date:"",
                system_date:new Date().toISOString().slice(0, 19).replace('T', ' '),
            },
            purch_details:{},
            biddet:{},
        }
    },
     mixins: [Tab],
    components:{
        'purchase-client': Customerinfo,
        'purchase-currency': Currency,
        'purchases' : Purchases
    },

     computed:{
    ...mapGetters([
        'newPurchaseList',
        'singlepurchase',
        'purchaseList',
        'purchaseDetails',
        'purchaseadded',
        'bidadded',
        'bidDetails',
        'loggedinUser'
    ])
    },
    mounted(){
        //  cleardetails()
    },

    methods:{
        openClient(){
            this.showClient = !this.showClient;
            this.showCurrency = false;
        },
        openCurrency(){
            this.showCurrency = !this.showCurrency;
            this.showClient = false;
        },
        removenotif(){
            // this.addcomplete = false
            this.changepurchasestatus();
        },

        getcustomerdetails(cust_details){
            this.customer_details = cust_details;

            this.purchases.mode_of_id = this.customer_details.mode_of_id
            this.purchases.id_no = this.customer_details.id_no
            this.purchases.id_expirydate = this.customer_details.id_expirydate
            this.purchases.bvn = this.customer_details.bvn
            this.purchases.fullname = this.customer_details.fullname
            this.purchases.transaction_date = this.customer_details.transaction_date
        },

        populatedetails(bid_details){
            this.biddet = bid_details

            this.purchbid = true
            this.purchasemain = {
                note: bid_details.note,
                quantity: bid_details.quantity,
                starting_no: bid_details.starting_no,
                ending_no: bid_details.ending_no,
                currency_prefix: bid_details.currency_prefix,
                currency_suffix: bid_details.currency_suffix
            }

            for (let i=0; i< this.newPurchaseList.length-1; i++){
                 
                this.amount += this.newPurchaseList[i].note * bid_details.buyingrate
              
            }
            this.currCode = bid_details.currency.code

            this.boxdisable = true
            this.purchases.currency = bid_details.currency.id
            this.purchases.buyingrate = bid_details.buyingrate
            this.purchases.quantity = this.newPurchaseList.length
            this.purchases.mode_of_purchase = bid_details.mode_of_purchase
            this.purchases.transaction_date = bid_details.transaction_date
          
             this.purchases.totalamount= this.amount.toFixed(2)
        //   this.purchases.totalamount= parseFloat(this.nwamount.replace(/,/g, ""))
        //             .toFixed(2)
        //             .toString()
        //             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //   this.purchases.purchase_detail = this.newPurchaseList

        //   console.log(this.purchases)

        },

        getpurchasedet(purchase){
           
           
            this.purch_details = purchase;
            
          
            for (let i=0; i< this.newPurchaseList.length;i++){
                  
                this.amount += this.newPurchaseList[i].note * this.purch_details.buyingrate
                // this.purch_details.quantity   
                // console.log(this.amount)
                    
            }
            
            this.boxdisable = true
             if(purchbid){
            this.purchases.currency = this.biddet.currency.id
            this.purchases.buyingrate = this.biddet.buyingrate
            this.purchases.quantity = this.newPurchaseList.length
            this.purchases.mode_of_purchase = this.biddet.mode_of_purchase
          
            this.purchases.totalamount= this.amount.toFixed(2)
               
           } else
            this.purchases.currency = this.purch_details.currency.id
            this.purchases.buyingrate = this.purch_details.buyingrate
            this.purchases.quantity = this.newPurchaseList.length
            this.purchases.mode_of_purchase = this.purch_details.mode_of_purchase
            
            this.purchases.totalamount= this.amount.toFixed(2)
        // this.purchases.totalamount= parseFloat(nwamount.replace(/,/g, ""))
        //             .toFixed(2)
        //             .toString()
        //             .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // console.log(this.purchases);
            
        },


        cleardetails(){
            this.boxdisable = false
            this.purch_details = {}
            this.customer_details = {}
            this.emptypurchaseList();

            this.amount = 0
            this.purchases.mode_of_id = ""
            this.purchases.id_no = null
            this.purchases.id_expirydate = null
            this.purchases.bvn = null
            this.purchases.currency = ""
            this.purchases.buyingrate = ""
            this.purchases.quantity = ""
            this.purchases.fullname = "CBN/Bank"
            this.purchases.transaction_date = ""
           this.purchases.totalamount = 0

        },

       async submitPurchase(){
           this.purchases.purchase_detail = this.newPurchaseList
           this.purchases.user = this.loggedinUser.id
            // this.addcomplete = true
            if(this.purchbid){
                
                await this.addNewBid(this.purchasemain)

                if(this.bidadded){
                    this.purchases.main = this.bidDetails.id
                await this.addNewPurchase(this.purchases);
                setTimeout(this.removenotif, 5000)

            this.boxdisable = false
            this.emptypurchaseList();
            this.purchases.totalamount = 0
            this.amount = 0
                }
            }else 
            await this.addNewPurchase(this.purchases);
            setTimeout(this.removenotif, 5000)

            this.boxdisable = false
            this.emptypurchaseList();
            this.purchases.totalamount = 0
            this.amount = 0
        },
        yesSubmit(){
            this.boxdisable = false
            this.emptypurchaseList();
            this.purchases.totalamount = 0
            this.amount = 0
            //Send to db
        },

        noSubmit(){
            cleardetails();
            this.emptypurchaseList();
            //Send to db
        },
       clear_bids(){
            this.emptypurchaseList();

            this.amount = 0
            this.purchases.mode_of_id = ""
            this.purchases.id_no = null
            this.purchases.id_expirydate = null
            this.purchases.bvn = null
            this.purchases.currency = ""
            this.purchases.buyingrate = ""
            this.purchases.quantity = ""
            this.purchases.fullname = "CBN/Bank"
            this.purchases.transaction_date = ""
            this.purchases.totalamount = 0
        },
        ...mapActions(['getCurrencies',
        'emptypurchaseList',
        'addNewPurchase',
        'addNewPurchase',
        'changepurchasestatus',
        'addNewBid'
        ])
    }
}
</script>

