"use client";

import { useState } from "react";

export default function Create() {
  const [message, setMessage] = useState("");
  const [campaign, setCampaign] = useState({});

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

  function handleRegisterCampaign(e) {
    setMessage("Campaign successfully registered");
  }

  function handleInputChange(e) {
    setCampaign((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function handleSave() {
    setMessage(JSON.stringify(campaign));
    console.log(campaign);
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
            <p>Fill in the fields to include your campaign on the platform.</p>
            <p>
              Once you have completed the registration process, you will receive
              a link to promote your campaign and receive donations.
            </p>
            <hr className="mb-4" />
            <div className="form-floating mb-3">
              <input
                type="text"
                id="title"
                className="form-control opacity-75"
                onChange={handleInputChange}
                value={campaign.title || ""}
              />
              <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                id="description"
                className="form-control opacity-75"
                onChange={handleInputChange}
                value={campaign.description || ""}
              />
              <label htmlFor="description">Description</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                id="imageUrl"
                className="form-control opacity-75"
                onChange={handleInputChange}
                value={campaign.imageUrl || ""}
              />
              <label htmlFor="imageUrl">Imagem URL </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                id="videoUrl"
                className="form-control opacity-75"
                onChange={handleInputChange}
                value={campaign.videoUrl || ""}
              />
              <label htmlFor="videoUrl">Video URL</label>
            </div>
            <div className="mb-5">
              <button
                type="button"
                className="btn btn-primary col-12 p-3 fw-bold mb-3 text-white"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
            {message ? (
              <div className="alert alert-success mt-5 opacity-50">
                {message}
              </div>
            ) : null}
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
