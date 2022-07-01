import request from '@/utils/request'
export default {
//根据手机号码发送短信
  getEmail(dstEmail) {
    return request({
      url: `/mail/send/${dstEmail}`,
      method: 'get'
    })
  },
//用户注册
  submitRegister(formItem) {
    return request({
      url: `api/ucenter/member/register`,
      method: 'post',
      data: formItem
    })
  }
}
