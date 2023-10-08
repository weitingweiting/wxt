<template>
  <div class="app-entry">
    <Menu />
    <router-view v-slot="{ Component }">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" :key="$route.fullPath"></component>
      </keep-alive>
      <component v-if="!$route.meta.keepAlive" :is="Component" :key="$route.fullPath"></component>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Menu from '@/layout/menu/index.vue'
export default defineComponent({
  name: 'App',
  components: { Menu },
  props: [],
  setup() {
    return {}
  }
})
</script>
