<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 1100px;">
      <el-tab-pane label="十年top10作者被引用数统计" name="ewt"><pie-author /><bar-author /></el-tab-pane>
      <el-tab-pane label="十年top10机构论文数量统计" name="swt"><pie-school /><bar-school /></el-tab-pane>
      <el-tab-pane label="数据集中2007-2017年论文数量统计" name="zdy"><bar-paper /></el-tab-pane>
      <el-tab-pane label="词云" name="ywt"><cloud /></el-tab-pane>
      <!-- <el-tab-pane label="小提琴统计图" name="tjt"><sepal-length /></el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import BarAuthor from '../views/Bar_Author.vue';
import BarPaper from '../views/Bar_Paper.vue';
import BarSchool from '../views/Bar_School.vue';
import Cloud from '../views/cloud.vue';
import PieAuthor from '../views/Pie_Author.vue';
import PieSchool from '../views/Pie_School.vue';
// import SepalLength from '../views/SepalLength.vue';
export default {
  data() {
    return {
      activeName: "ewt",
    };
  },
  components: {
    // SepalLength,
    PieAuthor,
    BarAuthor,
    PieSchool,
    BarSchool,
    BarPaper,
    Cloud
  },
  
    Cloudethods: {
  handleClick(tab, event) {
    console.log(tab, event);
    // this.$router.push(`/main/view/${tab.name}`);
  },
  },
  
};
</script>

<style></style>
