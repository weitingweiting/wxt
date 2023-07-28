import request from 'api/request'

export async function phoneUploadFiles(data = {}) {
  return request({
    url: `/oss/phoneUploadFiles`,
    method: 'post',
    data
  })
}

export async function saveFileStorage(data = {}) {
  return request({
    url: `/oss/saveFileStorage`,
    method: 'post',
    data
  })
}
