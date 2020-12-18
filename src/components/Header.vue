<template>
  <div class="headerContainer">
    <!-- header -->
    <div class="customHeader">
      <div class="headerLogo">
        <img
          class="logo"
          src="../assets/img/LOGO.png"
          alt="網站logo"
          srcset=""
        />
      </div>
      <div class="slogan">工業污染防治刊物及綠色技術與工程研討會</div>
      <div class="linkBox">
        <span class="headerLink">網站地圖</span>
        <span class="headerLink" @click="$router.push('/')">回首頁</span>
      </div>
    </div>

    <!-- navBar -->
    <div class="navBar">
      <div class="navBarLinks">
        <router-link class="navBarLink" to="/Industry"
          >工業污染防治刊物投稿</router-link
        >
        <router-link class="navBarLink" to="/GreenTec"
          >綠色技術與工程實務論文投稿</router-link
        >
        <router-link class="navBarLink" to="/Search">投稿進度查詢</router-link>
      </div>
    </div>

    <!-- bread -->
    <div class="breads">
      <span class="breadSpan">目前位置：</span>
      <span class="breadSpan">首頁 > </span>
      <span v-for="(r, idx) in routeMatch" :key="r.path" class="breadSpan"
        >{{ r.meta.title }}
        <span v-if="idx !== routeMatch.length - 1"> > </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "customHeader",
  data() {
    return {
      routeMatch: [],
    };
  },
  watch: {
    $route(to, from) {
      this.routeMatch = this.$route.matched;
    },
  },
  mounted() {
    this.routeMatch = this.$route.matched;
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";
.headerContainer {
  width: 100%;
  height: $headerHeight;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  background: $colorGray;
}

.customHeader {
  background-image: $colorLinear;
  height: 58%;
  width: 100%;
  display: flex;
  padding: 0 5%;
  justify-content: space-between;
}

.headerLogo {
  width: 230px;
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  width: 100%;
}

.slogan {
  font-weight: 700;
  color: #fff;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
}

.linkBox {
  height: 100%;
  display: flex;
  align-items: center;
}

.headerLink {
  display: inline-block;
  font-size: 0.725rem;
  margin-left: 0.5rem;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.navBar {
  height: 27%;
  width: 100%;
  background: $colorThird;
}

.navBarLinks {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
}

.navBarLink {
  color: #fff;
  margin-left: 1.5rem;
  font-size: 0.825rem;
  transition: 0.5s;

  &:hover {
    color: #bfdfb1;
  }
}

.breads {
  height: 15%;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
}

.breadSpan {
  font-size: 0.725rem;
}

.router-link-active {
  color: #bfdfb1;
  border-bottom: 1px solid;
}
</style>