import { Routes, Route } from "react-router-dom";
import AppPage from "./pages/AppPage";
import TestPage from "./pages/TestPage";
import Home from "./pages/Home";
import QueryParamsPage from "./pages/QueryParamsPage";
import StartWithLink from "./pages/StartWithLink";
import JsonPlaceHolderPage from "./pages/Post";
import Navbar from "./components/Navbar";
import PerticularPostComment from "./pages/PerticularPostComment";
import ShadowLogin from "./pages/Shadowdom";
import useUserflow from "./hooks/useUserflow";
import useBeamer from "./hooks/useBeamer";
import UFUser from "./pages/UFUser";
import JsonPlaceHolderPageFrench from "./pages/post-fr";
import CommentairePostParticulierFrench from "./pages/PerticularPostCommentfrench";
import "./index.css";

export default function App() {
  useUserflow();
  useBeamer();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="app" element={<AppPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="query" element={<QueryParamsPage />} />
          <Route path="start-with-link" element={<StartWithLink />} />
          <Route path="post" element={<JsonPlaceHolderPage />} />
          <Route path="post-fr" element={<JsonPlaceHolderPageFrench />} />
          <Route path="shadowdomlogin" element={<ShadowLogin />} />
          <Route path="ufusersusingAPI" element={<UFUser />} />
        </Route>
        <Route
          path="/post/:postId/comments"
          element={<PerticularPostComment />}
        />
        <Route
          path="/post-fr/:postId/comments"
          element={<CommentairePostParticulierFrench />}
        />
      </Routes>
    </div>
  );
}
