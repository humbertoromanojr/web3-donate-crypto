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
            <img src="/link-shield.png" alt="" />
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
