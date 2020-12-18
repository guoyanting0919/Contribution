<template>
  <button
    :class="{ greenBtn: isGreen }"
    @click.prevent="handleSubmit"
    class="submitBtn"
  >
    <img
      v-if="icon"
      class="submitBtnIcon"
      src="../assets/img/首頁ICON_我要投稿.png"
      alt=""
    />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "submitBtn",
  props: {
    text: {
      type: String,
      default: "按鈕名稱",
      require: false,
    },
    icon: {
      type: Boolean,
      default: false,
      require: false,
    },
    isGreen: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";
.submitBtn {
  background: $colorForth;
  padding: 0.5rem 1.25rem;
  color: #ffffff;
  border: 1px solid #00f2ff;
  border-radius: 200px;
  letter-spacing: 0.15rem;
  box-shadow: 2px 2px 0px #003869;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &.greenBtn {
    background: #139683;
    border: 1px solid #1bcfa8;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 7px #003869;
  }
}
.submitBtnIcon {
  margin-right: 0.5rem;
}
</style>