<template>
  <div class="notfound">没有uuid,请正确扫码</div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'Notfound',
  components: {},
  props: [],
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.notfound {
  padding: 8px 10px;
}
</style>
