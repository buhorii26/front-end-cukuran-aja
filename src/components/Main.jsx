// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

function Main() {
  const { authUser } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <div className="content">
            <h1>Daftar list Aplikasi</h1>
            <p>Ini halaman belum login</p>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Loading />
      <main>
        <div className="content">
          <h1>Daftar list Aplikasi</h1>

          <p>Ini halaman sudah login</p>
        </div>
      </main>
    </>
  );
}
export default Main;
