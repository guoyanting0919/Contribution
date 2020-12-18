<template>
  <div class="industry">
    <Title title="工業污染防治刊物投稿" />
    <div class="subContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "industry",
  components: { Title },
};
</script>

<style>
</style>