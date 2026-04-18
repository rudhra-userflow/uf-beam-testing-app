import React from "react";
import userflow, { Attributes } from "userflow.js";
import DrawerAppBar from "../components/muicomponent";
import "./styles/TestPage.css";
import { useUserflowResourceCenter } from "../hooks/useUserflowResourceCenter";

const TestPage: React.FC = () => {
  const { isResourceCenterAvailable, uncompletedChecklistTaskCount } =
    useUserflowResourceCenter();

  const getAnnoCount = () => {
    if ((window as any).userflow) {
      const val = (window as any).userflow.getResourceCenterState();
      console.log(val?.unreadAnnouncementCount);
    } else {
      console.error("Userflow is not available.");
    }
  };

  return (
    <div className="test-page">
      <div className="test-header">
        <h1 className="test-title">Test Page</h1>
        <p className="test-description">Welcome to the Test Page!</p>
      </div>

      <div className="test-content">
        <div className="button-section">
          <button onClick={getAnnoCount} className="btn-primary demo-btn">
            Get Announcement Count
          </button>
          <button
            onClick={() => userflow.track("Get_Announcement_Count_Button")}
            className="btn-secondary"
          >
            Navigate to Post
          </button>
          <button
            onClick={() => userflow.toggleResourceCenter()}
            className="btn-primary"
          >
            Open Resource Center
          </button>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a value"
            className="form-input"
          />
        </div>

        <div>
          <h2>Resource Center Status</h2>
          {isResourceCenterAvailable ? (
            <div>
              <p>Resource Center is available: {isResourceCenterAvailable}</p>
              <p>Uncompleted tasks: {uncompletedChecklistTaskCount}</p>
            </div>
          ) : (
            <div>
              <p>
                Resource Center is not available: {isResourceCenterAvailable}
              </p>
              <p>Uncompleted tasks: {uncompletedChecklistTaskCount}</p>
            </div>
          )}
        </div>
        <button className="btn">Button 1</button>
        <button className="btn">Button 2</button>
        <button className="btn">Button 1</button>
        <button className="btn">Button 2</button>
      </div>
    </div>
  );
};

export default TestPage;
