import { Link, Outlet } from "react-router-dom";
import useServerStore from "../hooks/useServerStore";
import userflow from "userflow.js";
import "./styles/JsonPlaceHolderPage.css";

export default function JsonPlaceHolderPageFrench() {
  const { data, loading, error, fetchPostData } = useServerStore();

  return (
    <div className="post-page">
      <div className="post-header">
        <h1 className="post-title">État du serveur avec Zustand</h1>
        <p className="post-description">Parcourir et explorer les articles de l'API JSONPlaceholder</p>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span className="loading-text">Chargement des articles...</span>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-title">Erreur</p>
          <p className="error-message">{error}</p>
        </div>
      )}

      {data && data.length > 0 ? (
        <div className="post-grid">
          {data.slice(0, 6).map((item: any) => (
            <div key={item.id} className="post-card">
              <Link
                to={`/post-fr/${item.id}/comments`}
                onClick={() => {
                  userflow.updateUser({ post_id: `${item.id}` });
                }}
                className="post-link"
              >
                <h3 className="post-title">{item.title}</h3>
                <p className="post-id">ID de l'article: {item.id}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="empty-message">
            <p>Aucun article disponible. Cliquez sur le bouton ci-dessous pour récupérer les données.</p>
          </div>
        )
      )}

      <div className="button-container">
        <button className="btn-primary fetch-button" onClick={fetchPostData}>
          Obtenir les données des articles
        </button>
      </div>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}
