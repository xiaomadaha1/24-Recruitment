import { NextPage } from "next/types";
import { bar } from "@/public/config/navbar-config";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "../login";
const Navbar: NextPage = () => {
  const router = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);
  console.log(router);
  function handleLogin() {
    setIsShowLogin(true);
  }
  function handleClose() {
    setIsShowLogin(false);
  }
  return (
    <>
      <div>
        {bar.map((item, index) => {
          return <div key={index}>{item.label}</div>;
        })}
      </div>
      <button onClick={handleLogin}>登录</button>
      <Login isShow={isShowLogin} onClose={handleClose}></Login>
    </>
  );
};

export default Navbar;
