import { create } from "zustand";

interface ServerState {
  data: any;
  loading: boolean;
  commentData: any;
  error: string | null;
  fetchPostData: () => Promise<void>;
  fetchCommentData: (postId: number) => Promise<void>;
}

const useServerStore = create<ServerState>((set) => ({
  data: null,
  loading: false,
  commentData: null,
  error: null,

  fetchPostData: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      set({ data: result, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },

  fetchCommentData: async (postId: number) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      set({ commentData: result, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));

export default useServerStore;
