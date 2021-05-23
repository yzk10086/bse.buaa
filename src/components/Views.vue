<template>
  <div>
    <el-page-header @back="goBack" content="可视化展示" style="margin: 2%">
    </el-page-header>
    <el-row style="width: 100%">
      <el-col :span="20" style="margin: 0 2%">
        <Show />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Show from "./Show.vue";
export default {
  components: {
    Show,
  },
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style></style>
