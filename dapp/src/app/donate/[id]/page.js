"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { getCampaign } from "@/services/Web3Service";

export default function Donate() {
  const params = useParams();

  const [campaign, setCampaign] = useState({});
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    setMessage("Searching for campaign...please wait...");
    getCampaign(params.id)
      .then((result) => {
        setMessage("");
        result.id = params.id;
        setCampaign(result);
        console.log(result);
      })
      .catch((error) => {
        setMessage(`An error occurred: ${error.message}`);
        console.error(error);
      });
  }, []);

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

            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-md-12">
                {campaign.videoUrl ? (
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${campaign.videoUrl}?autoplay=1`}
                  ></iframe>
                ) : (
                  <img
                    src={campaign.imageUrl}
                    width="640"
                    height="400"
                    alt={campaign.title}
                  />
                )}
              </div>
            </div>
            <div className="row flex-lg-row-reverse align-items-center g-5">
              <div className="col-md-12">
                <h2 className="display-6 fw-bold lh-1 mb-3 text-body-emphasis">
                  {campaign.title}
                </h2>
                <p className="lead">
                  <strong>Author:</strong>
                  {campaign.author}
                </p>
                <p className="lead mb-3">{campaign.description}</p>
              </div>
            </div>
          </div>
          {message ? (
            <div className="alert alert-success mt-5 opacity-50">{message}</div>
          ) : null}
          <div className="col-2">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
