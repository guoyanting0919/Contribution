<template>
  <v-app id="app">
    <div id="topDiv" tabindex="-1"></div>
    <!-- 需要父層樣式 -->
    <div class="needHome" v-if="!$route.meta.NoNeedHome">
      <Header />
      <div class="appMainContainer">
        <router-view></router-view>
      </div>
      <Footer />
    </div>

    <!-- 不須父層樣式 -->
    <div v-else>
      <div class="noNeedHome">
        <router-view></router-view>
        <Footer />
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: { Header, Footer },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/basic/_variable.scss";
.appMainContainer {
  margin-top: $headerHeight;
  min-height: calc(100vh - 250px);
  background: $colorGray;
  padding: 0.5rem 10%;
  padding-bottom: 1.5rem;
}
</style>
