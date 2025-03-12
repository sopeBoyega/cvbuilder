import React from "react";
import Sidebar from "../components/global/sidebar";

import Header from "../components/global/header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center">
        <Sidebar />

        <div className="w-[100%] min-h-[100vh] order-1 ml-[20%]">
          <Header />
          <div className="p-[12px] bg-black min-h-[100vh]"> {children}</div>
        </div>
      </div>
    </div>
  );
}
