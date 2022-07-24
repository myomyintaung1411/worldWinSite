
export default {
    state: {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        drawer: false,
        gameUrl: {},
        banner: [],
        service:''
    },

    getters: {
        isMobile: state => state.isMobile,
        isTablet: state => state.isTablet,
        isDesktop: state => state.isDesktop,
        GameURL: state => state.gameUrl,
        Banner: state => state.banner,
        SERVICE:state => state.service
    },

    mutations: {
        Service(state, payload){
          state.service = payload
        },
        Banner_(state, payload) {
            let spliceItem = payload.slice(Math.max(payload.length -8,0))
            //console.log(spliceItem,"%%%%%%%%%%%%");
            state.banner = spliceItem
        },
        Game_Url(state, payload) {
            state.gameUrl = payload
        },
        CHANGE_WINDOW_SIZE(state, width) {
            if (width < 786) {
                state.isMobile = true
                state.isTablet = false
                state.isDesktop = false
            } else if (width < 1024 && width > 786) {
                state.isMobile = false
                state.isTablet = true
                state.isDesktop = false
            } else {
                state.isMobile = false
                state.isTablet = false
                state.isDesktop = true
                state.drawer = true
            }
        },
    },
    namespaced: true
}
