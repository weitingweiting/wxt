import axios from 'axios'
import { base } from 'api/base'

// 实例
const instance = axios.create({
  baseURL: base.baseApi,
  timeout: 30000,
  withCredentials: false
})
// 设置 post 请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
instance.defaults.headers['systemCode'] = 'WMS'

// loading
let loadingToastVM = null

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    if (config?.noBase) {
      config.baseURL = ''
    }
    if (config?.needLoading ?? false) {
      // loadingToastVM = Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   loadingType: 'spinner',
      //   duration: 0
      // })
      loadingToastVM = ElLoading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    loadingToastVM && loadingToastVM.clear()
    loadingToastVM = null
    if (response.status === 200 && response.data.successful) {
      return Promise.resolve(response.data)
    } else {
      return Promise.resolve(response.data)
    }
  },
  (error) => {
    return Promise.resolve(error)
  }
)

export default instance
