<template>
  <div class="app-container home">
    <el-card>
      <div>
        <div class="block">
          <span class="demonstration">Elementui</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">highlight</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">js-cookie</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">vue-i18n</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">vue-quill-editor</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">vue-router</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">vuex</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
        <div class="block">
          <span class="demonstration">vuex</span>
          <el-slider v-model="value1" disabled></el-slider>
          <span class="demonstration">{{ value1 }}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      origin: "",
      id: "",
      value1: 100
    };
  },
  mounted() {
    this.origin = window.location.origin;
    this.id = window.btoa(this.$store.state.user.userInfo.user.id);
  }
};
</script>

<style scoped lang="scss">
.home {
  .toBlog {
    color: teal;
  }
  .block {
    display: flex;
    .demonstration {
      flex-shrink: 0;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-slider {
      width: 100%;
    }
  }
}
</style>
