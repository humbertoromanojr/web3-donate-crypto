"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  const backgroundImageStyle = {
    backgroundImage: "url(/people-sunset.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    color: "white",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

  function handleLogin() {
    push("/create");
  }

  return (
    <>
      <div
        style={backgroundImageStyle}
        className="container d-block background-color='#0f1221' align-items-center justify-content-center mx-lg-auto"
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-2">&nbsp;</div>
          <div className="col-8 mt-5">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-body-emphasis">
              Donate Crypto
            </h1>
            <p className="lead">Your decentralized donation platform.</p>
            <p className="lead">
              Log in with your wallet and create your campaign.
            </p>
            <p className="lead mb-4">
              For donations, use the link to an existing campaign.
            </p>
            <div className="d-flex justify-content-start mt-5">
              <button className="btn btn-primary btn-lg" onClick={handleLogin}>
                <img
                  src="/logo-metamask.png"
                  alt="logo metamask"
                  width={32}
                  className="me-2"
                />
                Connect with Metamask
              </button>
            </div>
            <div className="alert alert-success mt-5 opacity-50">
              User successfully authenticated
            </div>
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
