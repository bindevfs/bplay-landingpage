export const state = () => ({
  open_nav: false,
})

export const mutations = {
  TOGGLE_NAV(state) {
    state.open_nav = !state.open_nav
  },
}

export const actions = {
  toggleNavbar({ commit }) {
    commit('TOGGLE_NAV')
  },
}
