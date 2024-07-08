import { defineStore } from 'pinia';
import type { TodoItem } from '~/utils/interface';

export const useCrtStore = defineStore({
  id: 'DIK',
  state: () => ({
    DI: '' as string,
    DK: '' as string,
  }),
  getters: {
    getKey: state => {
      return state.DK;
    },
    getIv: state => {
      return state.DI;
    },
  },
  actions: {
    setIv(value: string) {
      this.DI = value;
    },
    setKey(value: string) {
      this.DK = value;
    },
  },
  persist: {
    storage: persistedState.cookies,
  },
});

export const useDataStore = defineStore({
  id: 'TDD',
  state: () => ({
    items: '' as any,
  }),
  actions: {
    async setItems(v: TodoItem[]) {
      const { ciphertext } = await encAES256(JSON.stringify(v));
      this.items = ciphertext;
    },
    async setItem(v: TodoItem) {
      console.log(v);
      let convertValue: TodoItem[] = [];
      if (this.items.length != 0) {
        const decryptText = await decAES256(this.items);
        console.log('decrypt', decryptText);
        convertValue = JSON.parse(decryptText);
      }
      convertValue.push(v);
      await this.setItems(convertValue);
    },
    async removeItem(i: number) {
      const decryptText = await decAES256(this.items);
      const convertValue = JSON.parse(decryptText);
      convertValue.splice(i, 1);
      await this.setItems(convertValue);
    },
    async updateItem(chk: boolean, i: number) {
      const decryptText = await decAES256(this.items);
      const convertValue = JSON.parse(decryptText);
      convertValue[i].chk = chk;
      await this.setItems(convertValue);
    },
  },
  persist: {
    storage: persistedState.sessionStorage,
  },
});
