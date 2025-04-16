"use client"
import React from "react";
import Sidebar from "../components/global/sidebar";

import Header from "../components/global/header";
import { PJS } from "../fonts/fonts";
import BaseHOC from "../addons/HOC";
import Alerter from "../addons/alerter";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = new BaseHOC()
  const alerter = new Alerter()
  return (
    <base.Render className="bg-black">
      <div className="flex justify-between items-center">
        <Sidebar />

        <div className="w-[100%] min-h-[100vh] order-1 md:ml-[20%]">
          <Header base={base} alerter={alerter} />
          <div className={`${PJS.className} md:p-[7px] bg-[#0D1117] min-h-[100vh]`}> {children}</div>
        </div>
      </div>
    </base.Render>
  );
}
