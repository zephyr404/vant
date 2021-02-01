const getters: any = {
  loaded: (state: any) => state.app.loaded,
  origin: (state: any) => state.app.origin,
  force: (state: any) => state.app.force,
  tabTop: (state: any) => state.app.tabTop,
  tabInner: (state: any) => state.app.tabInner,
  tabData: (state: any) => state.app.tabData,
  selects: (state: any) => state.app.selects,
}

export default getters