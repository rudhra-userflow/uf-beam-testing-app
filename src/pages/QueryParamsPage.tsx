import { useLocation } from "react-router-dom";
import "./styles/QueryParamsPage.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function QueryParamsPage() {
  const query = useQuery();
  const name = query.get("name");
  const age = query.get("age");

  return (
    <div className="query-page">
      <div className="query-header">
        <h1 className="query-title">Query Parameters Page</h1>
        <p className="query-description">Viewing query parameters from the URL</p>
      </div>
      
      <div className="query-content">
        <div className="query-card">
          <h2 className="query-card-title">Query Parameters</h2>
          <div className="query-item">
            <span className="query-label">Name:</span>
            <span className="query-value">{name || "Not provided"}</span>
          </div>
          <div className="query-item">
            <span className="query-label">Age:</span>
            <span className="query-value">{age || "Not provided"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
