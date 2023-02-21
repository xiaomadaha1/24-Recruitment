/*
 * @Descripttion:
 * @version:
 * @Author: ZhengXiaoRui
 * @email: zheng20010712@163.com
 * @Date: 2023-02-21 23:26:30
 * @LastEditors: ZhengXiaoRui
 * @LastEditTime: 2023-02-21 23:39:15
 */
type Props = {
  isShow: boolean;
  onClose: () => void;
};
const Login = (props: Props) => {
  const { isShow, onClose } = props;
  return (
    <div
      style={{
        width: 200,
        height: 200,
        display: isShow ? "block" : "none",
        backgroundColor: "yellow",
      }}
    >
      <div>
        手机号 <input type="text" />
      </div>
      <div>
        验证码 <input type="text" />
      </div>
      <button>登录</button>
      <button onClick={onClose}>取消</button>
    </div>
  );
};

export default Login;
