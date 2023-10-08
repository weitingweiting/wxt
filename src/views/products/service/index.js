import request from 'api/request'

export async function getProducts(data = {}) {
  const url = data?.childId ? `/api/product/${data.parentId}/${data.childId}` : data?.parentId ? `/api/product/${data.parentId}` : '/api/product'
  return request({
    url,
    method: 'get'
  })
}
