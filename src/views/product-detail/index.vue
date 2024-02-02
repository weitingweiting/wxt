<template>
  <div class="product-detail-page">
    <div class="left-box">123</div>
    <div class="right-box">
      <div class="right-box-head">
        <div class="right-box-head-img">123</div>
        <div class="right-box-head-subsri">123</div>
      </div>
      <div class="right-box-content">
        <div class="right-box-content-title">
          <el-tabs type="border-card">
            <el-tab-pane label="User">User</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-detail-page {
  width: 100%;
  height: 100%;
  border: 1px red solid;
  display: flex;
  .left-box {
    width: 260px;
    height: 100%;
    border: 1px red solid;
  }
  .right-box {
    flex: 1;
    padding-left: 10px;
    .right-box-head {
      width: 100%;
      height: 320px;
      display: flex;
      > div {
        flex: 1;
        border: 1px red solid;
      }
    }
  }
}
</style>
