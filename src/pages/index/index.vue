<script setup lang="ts">
import { getHomeBannerAPI } from '../../services/home.js'
import CustomNavbar from '../../pages/index/components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '../../types/home'

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
</template>

<style lang="scss">
//
</style>
