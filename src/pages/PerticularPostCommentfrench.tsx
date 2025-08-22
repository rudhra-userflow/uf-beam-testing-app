import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useServerStore from "../hooks/useServerStore";
import "./styles/PerticularPostComment.css";
import userflow from "userflow.js";

const CommentairePostParticulierFrench: React.FC = () => {
  const { postId } = useParams();
  const { commentData, loading, error, fetchCommentData } = useServerStore();

  useEffect(() => {
    if (postId) {
      fetchCommentData(Number(postId));
    }
  }, [postId, fetchCommentData]);

  useEffect(() => {
    if (commentData && commentData.length > 0 && postId) {
      userflow.updateUser({ post_email: commentData[0].email });
    }
  }, [commentData, postId]);

  return (
    <div className="comments-page">
      <div className="comments-header">
        <h2 className="comments-title">Commentaires pour l'ID de publication : {postId}</h2>
        <p className="comments-description">Affichage de tous les commentaires pour cet article</p>
      </div>

      {loading && (
        <div className="comments-loading">
          <div className="comments-loading-spinner"></div>
          <span className="comments-loading-text">Chargement des commentaires...</span>
        </div>
      )}

      {error && (
        <div className="comments-error">
          <p className="comments-error-message">Erreur : {error}</p>
        </div>
      )}

      {commentData && commentData.length > 0 ? (
        <div className="comments-grid">
          {commentData.map((item: any) => (
            <div key={item.id} className="comment-card">
              <div className="comment-content">
                <p className="comment-body">{item.body}</p>
                <div className="comment-meta">
                  <p className="comment-email">Par : {item.email}</p>
                  <p className="comment-id">ID du commentaire : {item.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="comments-empty">
            <p>Aucun commentaire disponible pour cet article.</p>
          </div>
        )
      )}
    </div>
  );
};

export default CommentairePostParticulierFrench;
