import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [lengthCount, setLength] = React.useState(0);
  const [text, setText] = React.useState("");

  return (
    <>
      <div className="h-screen d-flex align-items-center">
        <Head>
          <title>Text Counter App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;1,200&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/images/documents.png" />
        </Head>
        <div className="w-100 text-center">
          <div id="Top">
            <span className="text-2xl font-bold">
              Total number of characters
            </span>
            <br />
            <div
              id="count"
              className="mt-3 bg-amber-500 rounded-pill text-6xl font-bold"
            >
              {
                text
                  .replace(/ /g, "")
                  .replace(/　/g, "")
                  .replace(/(\r\n|\n|\r)/gm, "").length
              }
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-10 col-10 mx-auto">
            <textarea
              className="mt-6 form-control"
              value={text}
              rows="20"
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
