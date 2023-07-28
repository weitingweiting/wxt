<template>
  <div class="home-page">
    <div class="home-page-banner">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="floor-products">
      <div class="floor-title">产品类别</div>
      <div class="floor-content">
        <el-row :gutter="10">
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"><div class="grid-content">1</div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"><div class="grid-content">1</div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"><div class="grid-content">1</div></el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"><div class="grid-content">1</div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.home-page {
  width: 100%;
  height: calc(100vh - 23px);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  .home-page-banner {
    width: 100%;
    height: 300px;
    background-color: red;
  }
  .floor-content {
    width: 100%;
    height: 300px;
    border: 1px solid #eee;
    .el-col {
      border-radius: 4px;
    }

    .grid-content {
      // width: 30rem;
      height: 3rem;
      border: 1px red solid;
      border-radius: 4px;
      min-height: 36px;
    }
  }
}
</style>
