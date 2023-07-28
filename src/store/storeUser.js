import { defineStore } from 'pinia'
export const storeUser = defineStore('storeUser', {
  // 数据模型
  state() {
    return {
      phoneInfo: '17366279879',
      sexInfo: '男',
      accountToken: '789789',
      noStorage: 'test'
    }
  },
  // 类比计算属性，取值有缓存
  getters: {},
  // 原则上，通过actions的方法，改变state。注意：anctions中不能使用箭头函数。
  actions: {
    setTokenFn(value) {
      this.accountToken = value
    }
  },
  //  使用pinia-persisit插件给store做持久化
  // persist: {
  //   //  此配置代表当前整个store，全部都做持久化存储。 (默认使用sessionStore)
  //   enabled: true
  // },
  persist: {
    enabled: true,
    // 指定持久化策略
    strategies: [
      {
        storage: localStorage,
        paths: ['accountToken']
      },
      {
        storage: sessionStorage,
        paths: ['phoneInfo', 'sexInfo']
      }
    ]
  }
})
