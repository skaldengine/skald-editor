const state = {
  menubar: {
    selected: 'objects',
  },
}

const getters = {

}

const mutations = {
  'gui.menubar.change_tab': (state, value) => {
    state.menubar.selected = value;
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}