
export default {
    state: {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        drawer: false,
        gameUrl: {},
        banner: [],
        service:'',
        getappUrl:{},
        iframeGameUrl:localStorage.getItem('xyzurl') || ''
    },

    getters: {
        isMobile: state => state.isMobile,
        isTablet: state => state.isTablet,
        isDesktop: state => state.isDesktop,
        GameURL: state => state.gameUrl,
        GETAPPURL: state => state.getappUrl,
        Banner: state => state.banner,
        SERVICE:state => state.service,
        Iframe_Game_Url: state => state.iframeGameUrl
    },

    mutations: {
        IFRAME_GAME_URL(state, payload){
            console.log("payload of ifrmae game url: " + payload);
            localStorage.setItem('xyzurl', payload);
            //window.location.reload();
            //state.iframeGameUrl = payload
        },
        Service(state, payload){
          state.service = payload
        },
        Banner_(state, payload) {
            let spliceItem = payload.slice(Math.max(payload.length -4,0))
            //console.log(spliceItem,"%%%%%%%%%%%%");
            state.banner = spliceItem
        },
        Game_Url(state, payload) {
            state.gameUrl = payload
        },
        getApp_Url(state, payload) {
            state.getappUrl = payload
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
