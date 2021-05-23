<template>
  <div>
    <el-page-header @back="goBack" content="数据集管理" style="margin: 2%">
    </el-page-header>
    <el-row style="width: 100%">
      <el-col :span="10" style="margin: 0 2%">
        <Upload />
      </el-col>
      <el-col :span="10" style="margin: 0 2%">
        <FileList />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import FileList from "./FileList.vue";
import Upload from "./Upload.vue";
export default {
  components: {
    FileList,
    Upload,
  },
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style></style>
