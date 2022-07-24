import network from './index.js'

export default {
    getBannerInfo() {
        // console.log('data ... ', data)
        return network({
            url: '/main/getBannerInfo',
            method: 'post',
        })
    },

    getGameUrl(data) {
        // console.log('data ... ', data)
        return network({
            url: '/main/getGameUrl',
            method: 'post',
            data
        })
    },

    getUserInfo(data) {
        // console.log('data ... ', data)
        return network({
            url: '/main/getUserInfo',
            method: 'post',
            data
        })
    },

    getMoneyBag(data) {
        // console.log('data ... ', data)
        return network({
            url: '/main/getMoneyBag',
            method: 'post',
            data
        })
    },

    getTransactionRecord(data) {
        // console.log('data ... ', data)
        return network({
            url: '/main/getTransactionRecord',
            method: 'post',
            data
        })
    },

    getBetRecord(data) {
        // console.log('data ... ', data)
        return network({
            url: '/main/getBetRecord',
            method: 'post',
            data
        })
    },

    getWelcomeMsg() {
        return network({
            url: '/main/getWelcomeMsg',
            method: 'post',
        })
    },
    getServiceLink(data) {
        return network({
            url: '/main/getServiceLink',
            method: 'post',
            data
        })
    }

}
