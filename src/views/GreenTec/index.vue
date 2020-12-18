<template>
  <div class="greenTec">
    <Title title="綠色技術與工程實務論文投稿" />
    <div class="subContainer">
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