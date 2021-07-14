<template>
  <div>
    <el-page-header @back="goBack" content="基本信息展示" style="margin: 2%">
    </el-page-header>
    <el-row style="width: 100%">
      <el-col :span="20" style="margin: 0 2%">
        <Show />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Show from "./Show_2.vue";
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
