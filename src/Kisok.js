import React, { useState } from "react";
import "./Kisok.css";

const contentData = [
  {
    id: 1,
    title: "Effortless kiosk deployment & management",
    description:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Feffortless-kiosk-deployement-image.jpg&w=1200&q=80",
  },
  {
    id: 2,
    title: "Customized interface for brand visibility",
    description:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fcustomized-interface-image.jpg&w=1200&q=80",
  },
  {
    id: 3,
    title: "What more can you do with Hexnode kiosk?",
    description:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fpower-up-protection-image.jpg&w=1200&q=80",
  },
  {
    id: 4,
    title: "Secure and update your app ecosystem",
    description:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fkiosk-mode%2F2x%2Fsecure-app-ecosystem.jpg&w=1200&q=80",
  },
];

export default function Kisok() {
  const [activeContentId, setActiveContentId] = useState(1);

  const handleTitleClick = (id) => {
    setActiveContentId(id === activeContentId ? null : id); // Toggle if the same title is clicked
  };

  const currentContent = contentData.find((item) => item.id === activeContentId);

  return (
    <div className="kisok-container">
      <h3 style={{textAlign:'center',paddingTop:'50px',fontSize:'35px',paddingBottom:'40px'}}>
        <strong>What additional possibilities does the Kiosk mode offer?</strong>
      </h3>
      <div className="row text-center  text-lg-start">
        {/* Image Section */}
        <div className="col-lg-6 mx-auto image-section">
          <img
            src={currentContent ? currentContent.image : contentData[0].image}
            alt={currentContent ? currentContent.title : contentData[0].title}
            className="img-fluid  "
          />
        </div>

        {/* Titles and Descriptions Section */}
        <div className="p-3 mx-auto col-lg-5 titles-section">
          {contentData.map((content) => (
            <div key={content.id} className="title-block">
              <h4
                className={`title ${
                  activeContentId === content.id ? "active-title" : ""
                }`}
                onClick={() => handleTitleClick(content.id)}
              >
               <strong> {content.title}</strong>
              </h4>
              {activeContentId === content.id && (
                <p className="description">{content.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
