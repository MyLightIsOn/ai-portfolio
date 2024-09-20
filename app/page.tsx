"use client";

import React from "react";
import Chat from "@/app/components/chat";

const Home = () => {
  return (
    <main className={"theme-green"}>
      <div id="crt">
        <div className="scanline"></div>
        <div className="terminal">
          <Chat />
        </div>
      </div>
    </main>
  );
};

export default Home;
