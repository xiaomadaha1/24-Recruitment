/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-12 20:33:37
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-18 18:57:13
 */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import RecuitmentItem from "./components/recruitmentItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <RecuitmentItem data="haha"></RecuitmentItem>
    </>
  );
}
