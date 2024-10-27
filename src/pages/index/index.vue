<script setup lang="ts">
import { getHomeBannerAPI } from '../../services/home.js'
import CustomNavbar from '../../pages/index/components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref([])
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图 -->
  <XtxSwiper></XtxSwiper>
</template>

<style lang="scss">
//
</style>
