import { ref } from 'vue'
import type { XtxGuessInstance } from '../types/component'

export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底方法
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回事件处理 和 ref

  return {
    guessRef,
    onScrolltolower,
  }
}
