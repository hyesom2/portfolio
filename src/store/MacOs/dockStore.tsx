import { create } from "zustand";

type Store = {
  instagramOpen: boolean;
}
type Actions = {
  setInstagramOpen: (isOpen: boolean) => void;
}

const dockStore = create<Store&Actions>()((set) => ({
  instagramOpen: false,
  setInstagramOpen: (isOpen) => set(() => ({ instagramOpen: isOpen}))
}));

export default dockStore;