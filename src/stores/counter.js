// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      count: 0,
      age: 18,
      sex: '男',
      name: 'John'
     }
  },
  getters:  {
    getAge(state){
      return state.age * 2;
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getName(name){
      this.name = name;
    },
    increment() {
      this.count++
    },
  },
})

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })