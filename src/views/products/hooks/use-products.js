import { shallowRef } from 'vue'
import { getProducts } from '../service/index'

export const useProducts = () => {
  const productsData = shallowRef([])

  const getProductsFn = async ({ parentId = '', childId = '' }) => {
    const params = {
      parentId,
      childId
    }
    try {
      const { code, data, message } = await getProducts(params)
      if (code === 1000) {
        // 判断data是否是数组
        if (Array.isArray(data)) {
          productsData.value = data
        } else {
          productsData.value = [data]
        }
      } else {
        console.log(message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getProductsFn,
    productsData
  }
}
