"use client";
import { useState } from "react";
import HomeAddressBar from "./HomeAddressBar";
import ToggleRegisterAndLoginheader from "./ToggleRegisterAndLoginheader";

function HomeHeader() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>{isLogin ? <HomeAddressBar /> : <ToggleRegisterAndLoginheader />}</div>
  );
}

export default HomeHeader;
