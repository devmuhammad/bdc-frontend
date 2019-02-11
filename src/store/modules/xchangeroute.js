
const state = {

    xchange: false,
}

const mutations = {

    setXchangeModal (state) {
      state.xchange= true
    },
    deleteXchangeModal (state) {
      state.xchange= false
    }
}

const actions = {
    setXchangeModal: ({ commit }) => commit('setXchangeModal'),
    deleteXchangeModal: ({ commit }) => commit('deleteXchangeModal')
}

const getters = {

    xchange: state => state.xchange
}

export default ({
    state,
    getters,
    actions,
    mutations
})