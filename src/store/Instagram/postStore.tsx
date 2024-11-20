import { create } from "zustand";

type Store = {
  postModalOpen: boolean;
  selectedPostId: number | null;
}

type Actions = {
  setPostModalOpen: (isOpen: boolean) => void;
  setSelectedPostId: (id: number | null) => void;
}

const postStore = create<Store & Actions>((set) => ({
  postModalOpen: false,
  setPostModalOpen: (isOpen) => set(() => ({ postModalOpen: isOpen })),
  selectedPostId: null,
  setSelectedPostId: (id) => set({ selectedPostId: id }),

}));

export default postStore;