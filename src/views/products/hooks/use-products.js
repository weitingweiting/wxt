import { getProducts } from '../service/index'

export const useProducts = () => {
  const getProductsFn = async ({ parentId = '', childId = '' }) => {
    console.log(parentId, childId)
    const params = {
      parentId,
      childId
    }
    try {
      const { code, data, message } = await getProducts(params)
      if (code === 1000) {
        console.log(data)
      } else {
        console.log(message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    getProductsFn
  }
}
