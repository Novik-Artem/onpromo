export const state = () => ({
  isBurgerOpen: false,
})

export const mutations = {

  openBurger(state) {
    state.isBurgerOpen = !state.isBurgerOpen
  },
  resetBurger(state) {
    state.isBurgerOpen = false
  }
}
