<template src="./xchange-rate.html">
    
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
     name: "xchange-rate",
     props: ["isActive"],
    data(){
        return{
            selectedcurrency:"USD",
            markettitle: "US Dollar ",
            currId:341,
            indicator: "",
            defaultId:341,
            addcomplete:false,
            loading:false,
            newrate :{
               currency:"",
               buy_rate_official: "",
               sell_rate_official: "",
               buy_rate_market: "",
               sell_rate_market: "",
               datecreated:new Date().toISOString().slice(0, 19).replace('T', ' ') 
            }
        }
    },
   async mounted () {
       this.getCurrencies();
       await this.getXchangerate();
       await this.getCurrencyById(this.defaultId);
      
       this.setRates();
    //    this.comparerates();
    },
    
    computed:{
    ...mapGetters([
        'currencyList',
        'xchangeList',
        'currencyDetails',
        'xchangeadded'
    ])
    },

    methods:{
        setRates(){
            if (this.currencyDetails[0]){
            this.newrate.sell_rate_official = this.currencyDetails[0].daily_rates[0].sell_rate_official
            this.newrate.sell_rate_market   = this.currencyDetails[0].daily_rates[0].sell_rate_market
            this.newrate.buy_rate_official  = this.currencyDetails[0].daily_rates[0].buy_rate_official
            this.newrate.buy_rate_market    = this.currencyDetails[0].daily_rates[0].buy_rate_market
            }else {
                this.indicator = "same"
            this.newrate.sell_rate_official = "-"
            this.newrate.sell_rate_market   = "-"
            this.newrate.buy_rate_official  = "-"
            this.newrate.buy_rate_market    = "-"
            }
        },

        async getSelected(){
            await this.getCurrencyById(this.selectedcurrency.id)
            await this.setRates();
            this.currId = this.selectedcurrency.id
            this.markettitle = this.selectedcurrency.desc
            this.selectedcurrency = this.selectedcurrency.code
        },
        removenotif(){
            this.addcomplete = false
        },
        
        async addrate(){
            this.newrate.currency = this.currId;
            // this.newrate.sell_rate_official = this.newrate.sell_rate_official.trim()
            // this.newrate.sell_rate_market   = this.newrate.sell_rate_market.trim()
            // this.newrate.buy_rate_official  = this.newrate.buy_rate_official.trim()
            // this.newrate.buy_rate_market    = this.newrate.buy_rate_market.trim()

           await this.addNewXchangerate(this.newrate)
           if (this.xchangeadded) this.addcomplete = true
            setTimeout(this.removenotif, 5000)
        },
       Close() {
      this.$store.commit('deleteTeamModal')
      this.$router.go(-1)
    },
        
    ...mapActions(['getCurrencies','getXchangerate','addNewXchangerate','getCurrencyById'])
    }
}
</script>

