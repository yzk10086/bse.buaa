<template>
  <div class="home" style="height: 600px">
    <el-col :span="4" style="height: 100%;border-right: solid 1px #e6e6e6;">
      <el-menu
        default-active="1"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/main/manager">
          <i class="el-icon-menu"></i>
          <span slot="title">数据集管理</span>
        </el-menu-item>
        <el-menu-item index="/main/views">
          <i class="el-icon-setting"></i>
          <span slot="title">可视化展示</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="16">
      <router-view />
    </el-col>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
