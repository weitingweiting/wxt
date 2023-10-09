import { ref, shallowRef } from 'vue'
import { queryActiveMenuList } from '@/api/index'

const defaultIndex = ref('')

const activeMenuList = shallowRef([])

export const useGetStore = () => {
  return {
    activeMenuList,
    defaultIndex
  }
}

export const useMenuList = () => {
  const activeFullPath = shallowRef([])

  const getActiveMenuListFn = async () => {
    try {
      const { code, data, message } = await queryActiveMenuList()
      if (code === 1000) {
        activeMenuList.value = data
      } else {
        console.log(message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  activeMenuList.value && activeMenuList.value.length === 0 && getActiveMenuListFn()

  const handleSelect = (_, fullPath) => {
    activeFullPath.value = fullPath
  }

  return {
    activeMenuList,
    activeFullPath,
    defaultIndex,
    handleSelect
  }
}
