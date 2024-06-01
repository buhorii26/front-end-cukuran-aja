// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const { authUser } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <div className="content">
            <h1>Selamat Datang!</h1>
            <Alert variant="danger">Maaf anda belum login!</Alert>
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
          <h1>
            Selamat Datang {''}
            <img
              src={authUser.avatar}
              alt={authUser.id}
              title={authUser.name}
              className="user-avatar"
            />
            {authUser.name}!
          </h1>
          <Alert variant="success">Selamat anda sudah login!</Alert>
        </div>
      </main>
    </>
  );
}
export default Main;
