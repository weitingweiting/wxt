<template>
  <div class="nav-bar">
    <div class="nav-compan-icon"></div>
    <div class="nav-compan-nav">
      <el-menu :default-active="defaultIndex" class="nav-el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/home">首页</router-link>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>丝丝缕缕</template>
          <el-menu-item index="2-1">
            <router-link to="/home">item one</router-link>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>产品中心</template>
          <SubItem />
        </el-sub-menu>

        <!-- <el-menu-item index="4">
          <router-link :to="{ name: 'Products', query: { categoriId: 7 } }">案例与支持</router-link>
        </el-menu-item>

        <el-menu-item index="5">
          <router-link :to="{ name: 'Products', query: { categoriId: 8 } }">人才招聘</router-link>
        </el-menu-item>

        <el-menu-item index="6">
          <router-link :to="{ name: 'Products', query: { categoriId: 9 } }">新闻中心</router-link>
        </el-menu-item>

        <el-menu-item index="7">
          <router-link :to="{ name: 'Products', query: { categoriId: 10 } }">联系我们</router-link>
        </el-menu-item> -->
      </el-menu>
    </div>
    <!-- <div class="nav-compan-search"></div> -->
    <div class="showVMenu" @click="show">
      <img :src="more" />
    </div>
  </div>
  <!-- <el-drawer v-model="foreign.drawer" title="" :with-header="false" size="50%">
    <div class="drawer-menu">
      <el-menu :default-active="activeIndex" class="nav-el-menu" mode="vertical" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>关于汪洋</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">产品中心</el-menu-item>
        <el-menu-item index="4">案例与支持</el-menu-item>
        <el-menu-item index="5">人才招聘</el-menu-item>
        <el-menu-item index="6">新闻中心</el-menu-item>
        <el-menu-item index="7">联系我们</el-menu-item>
      </el-menu>
    </div>
  </el-drawer> -->
</template>

<script setup lang="jsx">
import more from '@/assets/more.svg'
import { useMenuList } from '@/layout/menu/hooks/use-menu-list.jsx'
import { computed } from 'vue'

const { activeMenuList, defaultIndex, handleSelect } = useMenuList()

const SubItem = computed(() => {
  return (
    <div class={'active-menu-root'}>
      {activeMenuList.value.map((item) => {
        return (
          <router-link to={{ name: 'Products', query: { parentId: item?.id ?? '' } }}>
            <el-sub-menu key={item.id} index={`${item?.id ?? ''}`}>
              {{
                title: () => <span>{item.productMenuName}</span>,
                default: () => (
                  <>
                    {item.childMenus &&
                      item.childMenus.length > 0 &&
                      item.childMenus.map((child) => {
                        return (
                          <router-link to={{ name: 'Products', query: { parentId: child?.partentId ?? '', childId: child?.id ?? '' } }}>
                            <el-menu-item key={child.id} index={`${child.id}`}>
                              {child.productMenuName}
                            </el-menu-item>
                          </router-link>
                        )
                      })}
                  </>
                )
              }}
            </el-sub-menu>
          </router-link>
        )
      })}
    </div>
  )
})

const show = () => {
  foreign.drawer = true
}
</script>

<style lang="less" scoped>
.el-menu--horizontal {
  border-bottom: none;
}

.router-link-active {
  text-decoration: none; //去除默认样式
  background-color: transparent;
}

a {
  text-decoration: none;
  color: grey;
}

a:hover {
  background-color: transparent !important;
}

.nav-bar {
  width: 100%;
  background-color: #fff;
  display: flex;
  // align-items: center;
  font-size: 18px;
  color: #333;
  font-weight: bold;

  .nav-compan-icon {
    width: 260px;
    height: 70px;
  }

  .showVMenu {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  // 媒体查询，当宽度大于 768px 时，执行下面的样式
  @media screen and (min-width: 768px) {
    .nav-compan-nav {
      flex: 1;
      height: 70px;

      .nav-el-menu {
        height: 100%;
      }
    }

    .showVMenu {
      display: none;
    }
  }

  // 媒体查询，当宽度小于 768px 时，隐藏 .nav-compan-nav
  @media screen and (max-width: 768px) {
    .nav-compan-nav {
      display: none;
    }

    .showVMenu {
      display: block;
    }
  }

  .nav-compan-search {
    width: 60px;
    height: 70px;
    border: 1px red solid;
  }
}

.drawer-menu {
  :deep(.el-menu) {
    border: none;
  }
}
</style>
