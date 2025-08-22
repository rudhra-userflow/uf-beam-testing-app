import React, { useState } from "react";
import Modal from "./Modal";
import userflow from "userflow.js";
import "./styles/AppPage.css";

const AppPage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalWindow = () => {
    setOpenModal(false);
    userflow.track("modal_opened");
  };
  return (
    <div className="app-page">
      <div className="app-page-header">
        <h1 className="app-page-title">App Page</h1>
        <p className="app-page-description">Welcome to the App Page!</p>
      </div>
      
      <div className="app-page-content">
        <div className="button-group">
          <button
            className="btn-primary"
            onClick={() => setOpenModal(true)}
          >
            Open Modal
          </button>
          <button
            className="btn-secondary"
            onClick={() => userflow.toggleResourceCenter()}
          >
            Resource Center
          </button>
        </div>
        
        <div className="checklist-section">
          <h2 className="section-title">Userflow Checklist</h2>
          <div className="button-group">
            <a
              href="http://localhost:5173/app?userflow=f2f1876e-6377-4917-9dfa-e650fcbf30a4"
              className="btn-link"
            >
              Start checklist via link
            </a>
            <button
              className="btn-primary"
              onClick={() => userflow.start("f2f1876e-6377-4917-9dfa-e650fcbf30a4")}
            >
              Start checklist using start()
            </button>
          </div>
        </div>
      </div>
      
      <Modal isOpen={openModal} closeModal={closeModalWindow} children />
    </div>
  );
};

export default AppPage;
