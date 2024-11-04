<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '../../services/home.js'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { CategoryItem, BannerItem, HotItem } from '../../types/home'
import CustomNavbar from '../../pages/index/components/CustomNavbar.vue'
import CP from './components/CP.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import type { XtxGuessInstance } from '../../types/component'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const getHomeBannerData = async () => {
  let res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 下拉刷新状态
const isTriggered = ref(false)
// 加载中
const isLoading = ref(false)

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

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底事件
const onScrolltolower = () => {
  console.log('触发了上拉刷新')

  guessRef.value?.getMore()
}

const onRefresh = async () => {
  // 开启动画
  isTriggered.value = true
  console.log('触发了下拉刷新')
  // await getHomeCategoryData()
  // await getHomeBannerData()
  // await getHomeHotData()
  // 重置猜你喜欢数据
  await Promise.all([
    getHomeCategoryData(),
    getHomeBannerData(),
    getHomeHotData(),
    guessRef.value?.resetData(),
  ])

  isTriggered.value = false
}

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeCategoryData(), getHomeBannerData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <CustomNavbar></CustomNavbar>

  <!-- 滚动容器 -->
  <scroll-view
    :refresher-triggered="isTriggered"
    refresher-enabled
    @refresherrefresh="onRefresh"
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrolltolower"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>

    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <CP :list="categoryList" />
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
.page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  // flex: 1;
  padding-top: 100px !important;
  /* height: calc(100vh - var(--window-top)) !important; //calc()是动态计算函数 */
  height: 100vh !important;
}
</style>
