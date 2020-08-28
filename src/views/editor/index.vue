<template>
  <div class="content">
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="Tinymce">
          <TinymceContent />
        </el-tab-pane>
        <el-tab-pane label="Wangeditor">
          <WangeditorContent />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import TinymceContent from "./modules/TinymceContent";
import WangeditorContent from "./modules/WangeditorContent";

export default {
  name: "TinymceDemo",
  components: { TinymceContent, WangeditorContent },
  data() {
    return {
      activeName: ""
    };
  }
};
</script>

<style scoped>
.content {
  padding: 30px;
}
</style>
