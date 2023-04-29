import React from "react";
import Head from "next/head";
import {Navbar, Footer} from "@/layouts";
import {Html} from "next/document";
import {WrapperMain} from "@/components/appFrame/style";

type TProps = {
  children?: React.ReactNode;
};

function Frame(props: TProps) {
  return (
    <>
      <Head>
        <title>Teacher Muzaffar</title>
      </Head>
      <WrapperMain>
        <Navbar/>
        <main>{props.children}</main>
        <Footer/>
      </WrapperMain>
    </>
  );
}

export default Frame;