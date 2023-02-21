/*
 * @Descripttion: 
 * @version: 
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-12 20:33:37
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-18 23:11:53
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mock, Random } from 'mockjs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mock({
    "list|1-6": [
      {
        "id|+1": 1001,
        "business": "百度",
        "startTime": Random.date('yyyy-MM-dd'),
        "endTime": Random.date('yyyy-MM-dd'),
        "title": "百度暑期实习招聘开始啦！海量HC等你来！",
        "detail":
          "详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
        "tdCode":
          "https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E7%99%BE%E5%BA%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=824284446,3997049772&os=2817076151,2701476789&simid=3457749085,447151730&pn=0&rn=1&di=7169026086108397569&ln=1323&fr=&fmq=1676726100839_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fstatic.sensorexpert.com.cn%2Fcaiji%2Fc2a0948024080c76068c2bcd8dcb1366%2F20220427%2F9fc76774-955b-4e24-85f7-e521867a67e0.png&rpstart=0&rpnum=0&adpicid=0&nojc=undefined",
        "pageViews|1-1000": 1, 
        "likeNumber|1-1000": 1, 
        "type|1-4": 1 
      }
    ]
  }))
}
