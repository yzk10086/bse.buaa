<template>
  <div>
    <el-page-header @back="goBack" content="数据集管理" style="margin: 2%">
    </el-page-header>
    <iframe src="http://127.0.0.1:8090/" width="1200" height="700"></iframe>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style></style>
