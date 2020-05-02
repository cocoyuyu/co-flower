// 专门处理首页的 请求
import request from '@/utils/request.js'

/**
 * 获取 送恋人/爱情鲜花 右侧数据
 */
export const getList = () => {
  // return 的是接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/data/home.json',
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需要查询字符串参数，就提供 params
  })
}
