<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="统计图" name="tjt"><violin-plot /></el-tab-pane>
      <el-tab-pane label="一维图" name="ywt">一维图</el-tab-pane>
      <el-tab-pane label="二维图" name="ewt">二维图</el-tab-pane>
      <el-tab-pane label="三维图" name="swt">三维图</el-tab-pane>
      <el-tab-pane label="自定义" name="zdy">自定义</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ViolinPlot from "../views/ViolinPlot";
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    ViolinPlot,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      // this.$router.push(`/main/view/${tab.name}`);
    },
  },
};
</script>

<style></style>
