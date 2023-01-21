import { defineStore } from 'pinia'

export const counterStore = defineStore('counter', {
    state:()=> ({
        counter:0
    }),
  })