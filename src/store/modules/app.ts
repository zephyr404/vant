const app: any = {
  state: {
    loaded: false,
  },
  mutations: {
    SET_LOADED(state: any, loaded: any) {
      state.loaded = loaded;
    },
  },
  actions: {}
}

export default app