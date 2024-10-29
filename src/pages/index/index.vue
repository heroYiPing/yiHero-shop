<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '../../services/home.js'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { CategoryItem, BannerItem, HotItem } from '../../types/home'
import CustomNavbar from '../../pages/index/components/CustomNavbar.vue'
import CP from './components/CP.vue'
import HotPanel from './components/HotPanel.vue'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeCategoryData()
  getHomeBannerData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <CP :list="categoryList" />
  <HotPanel :list="hotList" />
  <view>index123</view>
</template>

<style lang="scss">
//
.page {
  background-color: #f7f7f7;
}
</style>
