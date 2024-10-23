<script setup lang="ts">
import { useMemberStore } from '../../stores'
import { http } from '../../utils/http'

const memberStore = useMemberStore()

const getData = async () => {
  const res = await http<number[]>({
    method: 'GET',
    url: '/member/profile',
    header: {},
  })
  console.log(res.result, '请求成功')
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '123123',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @click="getData" size="mini" plain type="warn">获取用户信息</button>
  </view>
</template>

<style lang="scss">
//
</style>
