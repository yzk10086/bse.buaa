<template>
  <el-card>
    <div slot="header">文件上传</div>
    <div>
      <el-upload
        class="avatar-uploader"
        :action="upUrl"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <el-button>更改头像</el-button>
      </el-upload>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      upUrl: "http://127.0.0.1:8081/data/",
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      if (res.code === 200) {
        this.$store.commit("setUserAvatar", res.data);
        this.user.avatarUrl = res.data;
      } else if (res.code === 400) {
        console.log("fail");
      } else {
        console.log(res);
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG或PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isPNG || isJPG) && isLt2M;
    },
  },
};
</script>

<style></style>
