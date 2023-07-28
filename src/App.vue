<template>
  <div class="app-entry">
    <NavBar />
    <router-view v-slot="{ Component }">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" :key="$route.fullPath"></component>
      </keep-alive>
      <component v-if="!$route.meta.keepAlive" :is="Component" :key="$route.fullPath"></component>
    </router-view>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance, provide } from 'vue'
import NavBar from '@/views/components/navbar'
export default defineComponent({
  name: 'App',
  components: { NavBar },
  props: [],
  setup() {
    // provide('preUrl', window.location.href)
    return {}
  }
})
</script>

<style lang="less" scoped></style>
