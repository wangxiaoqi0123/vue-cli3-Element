<template>
  <div class="components-container">
    <div class="content">
      <Wangeditor v-model="content" />
    </div>
    <div class="content" v-html="content"></div>
    <hr />
  </div>
</template>

<script>
import Wangeditor from "@/components/Wangeditor";

export default {
  name: "WangeditorContent",
  components: { Wangeditor },
  data() {
    return {
      content:
        `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
    };
  },
  methods: {
  }
};
</script>

<style scoped>
@import "./wangeditor.css";
.editor-content {
  margin-top: 20px;
}
.content {
  padding: 30px;
}
</style>
