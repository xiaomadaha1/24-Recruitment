/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-13 14:52:12
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-18 18:59:44
 */
import React from "react";
type Props = {
  data: string;
};
export default function RecuitmentItem(props: Props) {
  const { data } = props;
  return <div>{data}</div>;
}
