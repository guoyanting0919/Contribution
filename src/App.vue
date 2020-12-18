<template>
<<<<<<< HEAD
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view />
  </div>
=======
  <v-app id="app">
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
>>>>>>> dependabot/npm_and_yarn/elliptic-6.5.3
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
<<<<<<< HEAD
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  components: {
    Loading,
  },
  methods: {},
=======

  components: { Header, Footer },

  data: () => ({
    //
  }),
>>>>>>> dependabot/npm_and_yarn/elliptic-6.5.3
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/basic/_variable.scss";
.appMainContainer {
  margin-top: $headerHeight;
  min-height: calc(100vh - 224px);
  background: $colorGray;
  padding: 0.5rem 10%;
  padding-bottom: 1.5rem;
}
</style>
