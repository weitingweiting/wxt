<template>
  <div class="home-page">
    <div class="home-page-banner">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="floor-component">
      <div class="floor-title">产品类别</div>
      <div class="floor-content">
        <el-row :gutter="30">
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="grid-content">
              <img :src="product1" />
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="grid-content"><img :src="product1" /></div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="grid-content"><img :src="product1" /></div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="grid-content"><img :src="product1" /></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import product1 from '@/assets/images/product1.webp'
</script>

<style lang="less" scoped>
.home-page {
  width: 100%;
  height: calc(100vh - 80px);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fff;
  padding-bottom: 20px;
  .home-page-banner {
    width: 100%;
    height: 400px;
    background-color: red;
  }

  .floor-component {
    border: 1px blue solid;
    background-image: url('@/assets/images/floor1-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    .floor-title {
      width: 100%;
      padding: 18px 0px;
      display: flex;
      justify-content: center;
      font-size: 24px;
      color: #2a6398;
      font-weight: bold;
    }
    .floor-content {
      width: 100%;
      padding: 0px 1rem;

      .el-col {
        border-radius: 4px;
      }

      .grid-content {
        height: 2.8rem;
        // border: 1px red solid;
        border-radius: 4px;
        min-height: 36px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        img {
          width: fit-content;
          height: 2.8rem;
        }
        // background-image: url('@/assets/images/product1.webp');
        // background-repeat: no-repeat;
      }
    }
  }
}
</style>
