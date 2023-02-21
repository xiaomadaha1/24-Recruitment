/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-13 14:52:12
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-21 22:23:47
 */
import React from "react";
import test from "@/public/test.json";
type Props = {
  data: string;
};
export default function RecuitmentItem(props: Props) {
  const { data } = props;
  console.log(test);
  return <div>{data + JSON.stringify(test)}</div>;
}
