import "./styles/StartWithLink.css";

export default function StartWithLink() {
  return (
    <div className="start-link-page">
      <div className="start-link-header">
        <h1 className="start-link-title">Start With Link Page</h1>
        <p className="start-link-description">
          Welcome to the Start With Link page! This page is accessible via
          /#/start-with-link.
        </p>
      </div>
      
      <div className="start-link-content">
        <div className="start-link-card">
          <h2 className="start-link-card-title">Userflow Integration</h2>
          <p className="start-link-card-text">
            This page demonstrates how to start a Userflow checklist using a link.
          </p>
        </div>
      </div>
    </div>
  );
}
