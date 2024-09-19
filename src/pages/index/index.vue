<template>
  <view class="index">
    <Counter id="only"/>
    <view @tap="goJump">跳转home</view>
    <button type="primary" form-type="reset">Reset</button>
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'
import Taro from '@tarojs/taro';
import { eventCenter, getCurrentInstance } from '@tarojs/taro';
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../../stores/counter'
const store = useCounterStore()
const {name, age,sex, getAge} = storeToRefs(store)
name.value = '张三123'
console.log('store',name.value, age.value, sex.value, getAge.value)
store.$reset()
console.log('store',name.value, age.value, sex.value, getAge.value)

export default {
  name: 'Index',
  components: {
    Counter
  },
  mounted(){
     
    Taro.nextTick(() => {
      Taro.createSelectorQuery().select('#only').boundingClientRect().exec(res => {
        console.log('res', res);
      })
    })

    eventCenter.on(getCurrentInstance().router.onShow, () => {
        console.log('onShow111111111111')
      })
    this.onHashChange()
  },
  methods: {
    goJump(){
      console.log('goJump')
      Taro.navigateTo({
        url: '/pages/home/index?id=2&from=index',
      })
    },
    onHashChange(){
      window.addEventListener('hashchange', () => {
        console.log('hash发生变化')
      })
    }
  },
  onTabItemTap(index,pagePath, text){
    console.log('?????????', index,pagePath, text)
  }
}
</script>
