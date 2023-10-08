import request from 'api/request'
export async function queryActiveMenuList(data = {}) {
  return request({
    url: `/api/daohang`,
    method: 'get',
    params: {
      ...data
    }
  })
}
