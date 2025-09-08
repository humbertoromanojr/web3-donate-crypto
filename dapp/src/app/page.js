"use client";

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url(/people-sunset.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    color: "white",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

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
            <p className="lead">Sua plataforma descentralizada de Doações.</p>
            <p className="lead">
              Autentique-se com sua carteira e crie sua campanha.
            </p>
            <p className="lead mb-4">
              Para Doações, use o link da campanha já existente.
            </p>
            <div className="d-flex justify-content-start mt-5">
              <button className="btn btn-primary btn-lg px-4 me-2">
                <img
                  src="/logo-metamask.png"
                  alt="logo metamask"
                  width={32}
                  className="me-2"
                />
                Conectar com a Metamask
              </button>
            </div>
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
