"use client";

import React, { useEffect } from "react";
import { boot } from "@/utils/screens";

const Login = () => {
  useEffect(() => {
    boot().then((access_token) => {
      localStorage.setItem("access_token", access_token);
      window.location.replace("/");
    });
  }, []);

  return (
    <main className={"theme-green"}>
      <div id="crt">
        <div className="scanline"></div>
        <div className="terminal"></div>
      </div>
    </main>
  );
};

export default Login;
