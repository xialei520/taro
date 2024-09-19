<template>
  <view class="index">
    
    <view @tap="goJump">home</view>
  </view>
</template>

<script>
import './index.scss'
 
import Taro from '@tarojs/taro';
 
export default {
  name: 'home',
  created(){
    this.$instance = Taro.getCurrentInstance()
  },
  mounted(){
    console.log('路由参数',this.$instance.router.params)
  },
  methods: {
   
  },
  
}
</script>
