import { atom, selector } from "recoil";

const localStorageEffect = key => ({ setSelf, onSet }) => {
  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    setSelf(savedValue);
  }

  onSet(newValue => {
    if (newValue === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, newValue);
    }
  });
};

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined,
  effects_UNSTABLE: [
    localStorageEffect('TokenAtom'),
  ],
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
});
