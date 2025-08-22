import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useServerStore from "../hooks/useServerStore";
import "./styles/PerticularPostComment.css";
import userflow from "userflow.js";

const PerticularPostComment: React.FC = () => {
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
        <h2 className="comments-title">Comments for Post ID: {postId}</h2>
        <p className="comments-description">Viewing all comments for this post</p>
      </div>

      {loading && (
        <div className="comments-loading">
          <div className="comments-loading-spinner"></div>
          <span className="comments-loading-text">Loading comments...</span>
        </div>
      )}
      
      {error && (
        <div className="comments-error">
          <p className="comments-error-message">Error: {error}</p>
        </div>
      )}

      {commentData && commentData.length > 0 ? (
        <div className="comments-grid">
          {commentData.map((item: any) => (
            <div key={item.id} className="comment-card">
              <div className="comment-content">
                <p className="comment-body">{item.body}</p>
                <div className="comment-meta">
                  <p className="comment-email">By: {item.email}</p>
                  <p className="comment-id">Comment ID: {item.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : !loading && !error && (
        <div className="comments-empty">
          <p>No comments available for this post.</p>
        </div>
      )}
    </div>
  );
};

export default PerticularPostComment;