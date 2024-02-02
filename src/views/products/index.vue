<template>
  <div class="products-page">
    <div class="head">123</div>
    <div class="content">
      <div class="content-tree-box">
        <el-scrollbar height="100%">
          <el-tree :data="activeMenuList" :props="defaultProps" default-expand-all node-key="id" />
        </el-scrollbar>
      </div>
      <div class="content-list-box">
        <!-- <el-scrollbar height="100%"> -->
        <div class="content-list-wrap">
          <el-row :gutter="0">
            <el-col
              v-for="item in [...productsData, ...productsData, ...productsData, ...productsData, ...productsData, ...productsData]"
              :key="item.id"
              :xs="24"
              :sm="12"
              :md="12"
              :lg="6"
              :xl="6"
            >
              <div
                :key="item.id"
                class="grid-content"
                @click="
                  () => {
                    gotoDetailFn(item)
                  }
                "
              >
                <img class="grid-content-img" :src="item.picUrls[0]" />
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- </el-scrollbar> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from './hooks/use-products'
import { onMounted } from 'vue'
import { useGetStore } from '@/layout/menu/hooks/use-menu-list.jsx'

const route = useRoute()

const router = useRouter()

const { getProductsFn, productsData } = useProducts()

getProductsFn({ parentId: route.query.parentId, childId: route.query.childId })

const defaultProps = {
  children: 'childMenus',
  label: 'productMenuName'
}

const { defaultIndex, activeMenuList } = useGetStore()

const gotoDetailFn = (product) => {
  router.push({ path: '/product-detail', query: { productId: product.id } })
}

onMounted(() => {
  if (!!route.query.childId) {
    defaultIndex.value = route.query.childId
  } else {
    setTimeout(() => {
      const childId = activeMenuList.value.find((item) => item.id == route.query.parentId)?.childMenus[0]?.id
      defaultIndex.value = childId + ''
    }, 200)
  }
})
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
    background-color: #999;
  }

  .content {
    width: 100%;
    height: calc(100vh - 70px - 320px);
    flex: 1;
    display: flex;
    align-items: center;
    .content-tree-box {
      width: 260px;
      height: 100%;
      padding-top: 10px;
      padding-left: 10px;
    }

    .content-list-box {
      flex: 1;
      height: 100%;
      .content-list-wrap {
        padding: 20px;
        border-left: 2px #eaeaea solid;
      }
      .grid-content {
        width: 240px;
        height: 260px;
        margin-bottom: 10px;
        border: 1px #eaeaea solid;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        .grid-content-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform 0.4s ease-out;
        }
      }
      .grid-content:hover img {
        transform: scale(1.2);
      }
    }
  }
}
</style>
