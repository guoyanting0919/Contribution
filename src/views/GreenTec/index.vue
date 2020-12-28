<template>
  <div class="greenTec">
    <Title title="綠色技術與工程實務論文投稿" />
    <div class="subContainer">
      <a
        id="maincenter"
        href="#maincenter"
        accesskey="C"
        style="float: left; position: absolute; z-index: 99999"
        class="sr-only sr-only-focusable"
        title="中央內容區塊"
        >:::</a
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "greenTec",
  components: { Title },
};
</script>

<style>
</style>