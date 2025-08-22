import { Link, Outlet } from "react-router-dom";
import useServerStore from "../hooks/useServerStore";
import "./styles/JsonPlaceHolderPage.css";
import userflow from "userflow.js";

export default function JsonPlaceHolderPage() {
  const { data, loading, error, fetchPostData } = useServerStore();

  return (
    <div className="post-page">
      <div className="post-header">
        <h1 className="post-title">Server State with Zustand</h1>
        <p className="post-description">Browse and explore posts from JSONPlaceholder API</p>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span className="loading-text">Loading posts...</span>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-title">Error</p>
          <p className="error-message">{error}</p>
        </div>
      )}

      {data && data.length > 0 ? (
        <div className="post-grid">
          {data.slice(0, 6).map((item: any) => (
            <div key={item.id} className="post-card">
              <Link
                to={`/post/${item.id}/comments`}
                onClick={() => {
                  userflow.updateUser({ post_id: `${item.id}` });
                }}
                className="post-link"
              >
                <h3 className="post-title">{item.title}</h3>
                <p className="post-id">Post ID: {item.id}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="empty-message">
            <p>No posts available. Click the button below to fetch data.</p>
          </div>
        )
      )}

      <div className="button-container">
        <button className="btn-primary fetch-button" onClick={fetchPostData}>
          Get Post Data
        </button>
      </div>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}
