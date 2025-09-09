"use client";

export default function Donate() {
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
            <p>
              Please verify that this is the correct campaign before finalizing
              your donation.
            </p>
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
