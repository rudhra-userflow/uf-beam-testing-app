import React from "react";
import userflow, {Attributes} from "userflow.js";
import DrawerAppBar from "../components/muicomponent";
import "./styles/TestPage.css";

const TestPage: React.FC = () => {
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
          <button
            onClick={getAnnoCount}
            className="btn-primary demo-btn"
          >
            Get Announcement Count
          </button>
          <button
            onClick={() => (window.location.href = "https://dtkyz2.csb.app/post")}
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
        
        <div className="launcher-section">
          <div className="launcher-container">
            <div
              className="launcher-point"
              id="launcher-point-1"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAB2AAAAdgFOeyYIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAZ5JREFUOI29kr9rk1EUhp/3a36RxkSCWFqsEBCEii4OFimCg/+ArqIdXcVBKggiVKyIdFFw0O6dxW90EXFwqejkLogOln7GkHznHIeaxJhGBMG7nMt9z/ucl8uBfzyaJMQbql7iJp6QtP22TvN9r77CJICXeCTX5cjBNTULtvzXCWKLxYBXYYnIReSKcM4Ul/KXv/cmY+ZAIdbDpY10gafpUTCJXmE9bo33jz3wlku4TmVZiSdpi8fpYbZ3imCc7C1WLv4REO+pBdwJE9PFHPc2Zm1qZSNc4Mm9eN6sTwR4zo0wzWECF7VyRqOcIReYCNNMt9O7vicgtmgpdBXXz2miUcnYX/3WN+9W17XOZv3IOADdD1MFG0xj4dA2x+YzGJrBVSZP7o4A4h1nw3T+10mYaM01mT9QGyTq62G60NlonhsCelobiWni09cqD9MZHjxr8PFLsW8c6O5aBSjECwpuOhGjMTk43WF56QN5t8ts3SBPhn/hIkzHY5MpAdjrZCU8WYk82be7eQn9GrkGd2yg7bhptXbl89rYHv338wOTt9vdw/trswAAAABJRU5ErkJggg=="
                alt="Launcher 1"
              />
            </div>
            <div
              className="launcher-point"
              id="launcher-point-2"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAB2AAAAdgFOeyYIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAZ5JREFUOI29kr9rk1EUhp/3a36RxkSCWFqsEBCEii4OFimCg/+ArqIdXcVBKggiVKyIdFFw0O6dxW90EXFwqejkLogOln7GkHznHIeaxJhGBMG7nMt9z/ucl8uBfzyaJMQbql7iJp6QtP22TvN9r77CJICXeCTX5cjBNTULtvzXCWKLxYBXYYnIReSKcM4Ul/KXv/cmY+ZAIdbDpY10gafpUTCJXmE9bo33jz3wlku4TmVZiSdpi8fpYbZ3imCc7C1WLv4REO+pBdwJE9PFHPc2Zm1qZSNc4Mm9eN6sTwR4zo0wzWECF7VyRqOcIReYCNNMt9O7vicgtmgpdBXXz2miUcnYX/3WN+9W17XOZv3IOADdD1MFG0xj4dA2x+YzGJrBVSZP7o4A4h1nw3T+10mYaM01mT9QGyTq62G60NlonhsCelobiWni09cqD9MZHjxr8PFLsW8c6O5aBSjECwpuOhGjMTk43WF56QN5t8ts3SBPhn/hIkzHY5MpAdjrZCU8WYk82be7eQn9GrkGd2yg7bhptXbl89rYHv338wOTt9vdw/trswAAAABJRU5ErkJggg=="
                alt="Launcher 2"
              />
            </div>
          </div>
        </div>
        
        <div className="ammo-section">
          <h2 className="section-title">Ammo Accounts</h2>
          <div className="ammo-cards">
            <p className="ammo-account-card">Ammo Account 4</p>
            <p className="ammo-account-card">Ammo Account 3</p>
            <p className="ammo-account-card">Ammo Account 2</p>
            <p className="ammo-account-card">Ammo Account 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
