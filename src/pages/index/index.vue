<script setup lang="ts">
import { getHomeBannerAPI } from '../../services/home.js'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '../../types/home'
import CustomNavbar from '../../pages/index/components/CustomNavbar.vue'
import CP from './components/CP.vue'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CP />
  <view>index</view>
</template>

<style lang="scss">
//
.page {
  background-color: #f7f7f7;
}
</style>
