import { useLoading } from 'vue-loading-overlay'
let $loading = useLoading()
let loading
export default {
    showLoading() {
        loading = $loading.show({
            canCancel: false,
            color: '#2130A5',
            loader: 'dots',
        })
    },
    hideLoading() {
        setTimeout(() => {
            loading.hide()
        }, 2000)
    }
}