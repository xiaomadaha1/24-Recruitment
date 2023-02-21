/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-21 22:21:34
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-21 22:47:17
 */
/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-21 22:21:34
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-21 22:23:16
 */
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = function ({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
