<template>
  <div class="products-page">
    <div class="head">123</div>
    <div class="content">
      <div class="content-tree-box">
        <el-scrollbar height="100%">
          <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>
      </div>
      <div class="content-list-box">
        <el-scrollbar height="100%">
          <!-- <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p> -->
          <div>
            <el-row :gutter="0">
              <el-col v-for="item in 8" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <div :key="item" class="grid-content">
                  <!-- <img :src="product1" /> -->
                  123
                </div>
              </el-col>
            </el-row>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProducts } from './hooks/use-products'

const route = useRoute()
const { getProductsFn } = useProducts()
getProductsFn({ parentId: route.query.parentId, childId: route.query.childId })
</script>

<style lang="scss" scoped>
.products-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fff;

  /* padding-bottom: 20px; */
  .head {
    width: 100%;
    height: 320px;
    border: 1px red solid;
  }

  .content {
    width: 100%;
    height: calc(100vh - 70px - 320px);
    flex: 1;
    border: 1px red solid;
    display: flex;
    align-items: center;

    .content-tree-box {
      width: 300px;
      height: 100%;
      border: 1px red solid;
    }

    .content-list-box {
      flex: 1;
      height: 100%;
      border: 1px red solid;
      .grid-content {
        border: 1px red solid;
        width: 240px;
        height: 260px;
      }
      .grid-content:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        scale: 1.1;
        transition: all 0.3s;
      }
    }
  }
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
