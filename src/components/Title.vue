<template>
  <div class="customTitle">
    <h1 class="mainTitle">{{ title }}</h1>
    <img
      class="titleIcon"
      src="../assets/img/標題icon.png"
      alt="標題icon"
      srcset=""
    />
  </div>
</template>

<script>
export default {
  name: "customTitle",
  props: {
    title: {
      type: String,
      default: "主標題",
      require: false,
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";
.customTitle {
  position: relative;
}

.mainTitle {
  display: inline-block;
  padding: 0.25rem 1.5rem;
  padding-left: 6rem;
  background-image: $colorLinear;
  font-size: 1.5rem;
  border: 2px solid #ffffff;
  color: #fff;
  font-weight: normal;
  border-radius: 200px;
  margin-bottom: 0.5rem;
}

.titleIcon {
  position: absolute;
  left: -0.5rem;
  width: 100px;
  top: -0.5rem;
}
</style>