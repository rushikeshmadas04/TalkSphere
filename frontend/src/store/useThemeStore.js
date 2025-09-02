import {create} from 'zustand';// we installed zustand for it which makes us access the state globally
export const useThemeStore = create((set) => ({
  theme:localStorage.getItem("talkSphere-theme")||"halloween",
  setTheme:(theme) =>{
    localStorage.setItem("talkSphere-theme",theme);
    set({theme});
  },
}));