export const state = () => ({
  open_nav: false,
  products: [
    {
      id: 1,
      image: 'live-casino.png',
      name: 'Live Casino',
      desc: 'Vivo LiveCasino, HoGaming Live Casino, BPlay LiveCasino',
    },
    {
      id: 2,
      image: 'fishing-game.png',
      name: 'Fishing Game',
      desc: 'BPlay Fishing 2D, BPlay Fishing 3D',
    },
    {
      id: 3,
      image: 'sport-book.png',
      name: 'Sport Book',
      desc: 'BTI Sportsbook, BPlay Sportsbook',
    },
    {
      id: 4,
      image: 'number-game.png',
      name: 'Quick Number',
      desc: 'Keno, Number Games, Lottery',
    },
    {
      id: 5,
      image: 'white-label.png',
      name: 'White Label',
      desc: 'Bplay White Label',
    },
    {
      id: 6,
      image: 'jackpot-slots.png',
      name: 'Slots',
      desc: 'BPlay Slots, Jackpot Slots',
    },
    {
      id: 7,
      image: 'seamless-api.png',
      name: 'Seamless API',
      desc: 'Seamless API',
    },
    {
      id: 8,
      image: 'full-package.png',
      name: 'Full Package',
      desc: 'Full Package',
    },
    {
      id: 9,
      image: 'table-game.png',
      name: 'Table Game',
      desc: 'Table Game',
    },
  ],
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
