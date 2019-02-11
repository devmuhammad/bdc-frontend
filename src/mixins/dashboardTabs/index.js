export const Tab = {
  data() {
    return {
      tabs : [
        // {label:"Add Customer", active:true},
        {label:"Purchases", active:true},
        {label:"New Purchase", active:false},
        {label:"Bidding Purchase", active:false},
     
      ],
      activeTab: 'Purchases'
    }
  },

  methods: {
    navigate(to) {
      // console.log(to)
      let newTabs = [
        // {label:"Add Customer", active:false},
        {label:"Purchases", active:false},
        {label:"New Purchase", active:false},
        {label:"Bidding Purchase", active:false},      
      ]

      newTabs.forEach(newTab => {
        if(newTab.label === to) {
          this.activeTab = newTab.label
          newTab.active = true
        }
      });
      this.tabs = newTabs
    },

    isTabActive(label) {
      console.log(label)
      let is_active = false

      this.tabs.forEach(tab => {
        if(tab.label === label) {
          is_active = true
        }
      });

      return is_active
    }
  },
}