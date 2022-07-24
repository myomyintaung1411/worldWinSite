import network from './index.js'

export const UserLogin = (data) => {
  // console.log('data ... ', data)
  return network({
    url: '/opt',
    method: 'post',
    data
  })
}

// 请求示例
// get
// export const mokeGet = (data) => {
//   return axios({
//     url: '/api/xxxx',
//     method: 'get',
//     data,
//     config: {
//       headers: {
//         'Request-Type': 'wechat'
//       },
//       timeout: 10000
//     }
//   })
// }
// // post
// export const UserLogin = (data) => {
//   return axios({
//     url: '/opt',
//     method: 'post',
//     data,
//     config: {
//       headers: {
//         'Request-Type': 'application/json;charset=UTF-8;'
//       },
//       timeout: 5000
//     }
//   })
// }
