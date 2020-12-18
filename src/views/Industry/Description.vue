<template>
  <div class="industryDescription">
    <h1>html</h1>
    <div class="exampleContainer">
      <img
        src="../../assets/img/內頁ICON_稿件範例.png"
        alt="內頁ICON_稿件範例"
        srcset=""
      />
      <div class="examplePdfBox">
        <a href="#">範例稿件.pdf</a>
        <a href="#">範例範例稿件範例稿件範例稿件範例稿件範例稿件.pdf</a>
      </div>
    </div>
    <SubmitBtn
      text="我要投稿"
      style="margin: auto; margin-top: 1rem"
      :icon="true"
      @handleSubmit="$router.push('/Industry/Form')"
    />
  </div>
</template>

<script>
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "industryDescription",
  components: { SubmitBtn },
  methods: {
    handleSubmit() {
      console.log("handleSubmit");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";

.exampleContainer {
  width: 100%;
  background: $colorGray;
  border-radius: 200px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}
.examplePdfBox {
  display: flex;
  flex-direction: column;
  margin-left: 4rem;

  a {
    color: #444;
  }
}
</style>