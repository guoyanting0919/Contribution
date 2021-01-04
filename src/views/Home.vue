<template>
  <div class="home">
    <a
      href="#maincenter"
      id="gotocenter"
      title="跳到主要內容"
      tabindex="1"
      class="sr-only sr-only-focusable"
      >跳到主要內容
    </a>
    <a class="sitemapblock" accesskey="U" title="最上方選單" tabindex="1">
      :::
    </a>
    <div class="homeContainer">
      <!-- 左上角logo -->
      <div class="homeLogo">
        <h1 style="width: 260px; margin-right: 0.5rem">
          <img
            @click="$router.push('/')"
            class="logo"
            src="../assets/img/LOGO.png"
            alt="網站logo"
            srcset=""
          />
        </h1>

        <a
          id="maincenter"
          href="#maincenter"
          accesskey="C"
          style=""
          class=""
          tabindex="1"
          title="中央內容區塊"
          >:::</a
        >
        <router-link to="/webMap" tabindex="1" style="color: #fff"
          >網站導覽</router-link
        >
      </div>

      <!-- 左方大圖 -->
      <div class="mainPicContainer">
        <img
          class="mainPic"
          src="../assets/img/首頁主視覺.png"
          alt="首頁主視覺"
          srcset=""
        />
      </div>

      <!-- 工業污染投稿 -->
      <div class="industryContainer">
        <img
          src="../assets/img/首頁ICON_工業污染防治.png"
          alt="首頁ICON_工業污染防治"
          srcset=""
        />
        <h2 class="cardTitle">工業污染防治刊物投稿</h2>
        <p class="cardContent">
          工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿
        </p>
        <SubmitBtn
          text="我要投稿"
          style="margin-top: 1rem"
          :icon="true"
          @handleSubmit="handleSubmitIndu"
        />
      </div>

      <!-- 綠色技術投稿 -->
      <div class="greenTecContainer">
        <img
          src="../assets/img/首頁ICON_綠色技術.png"
          alt="首頁ICON_綠色技術"
          srcset=""
        />
        <h2 class="cardTitle">綠色技術與工程實務論文投稿</h2>
        <p class="cardContent">
          工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿
        </p>
        <SubmitBtn
          text="我要投稿"
          style="margin-top: 1rem"
          :icon="true"
          :isGreen="true"
          @handleSubmit="handleSubmitGreen"
        />
      </div>

      <!-- 投稿進度查詢 -->
      <div
        class="searchBox"
        @click="$router.push('/Search')"
        @keydown.enter="$router.push('/Search')"
        tabindex="0"
      >
        <img
          style="margin-right: 0.5rem"
          src="../assets/img/首頁ICON_進度查詢.png"
          alt="首頁ICON_進度查詢"
          srcset=""
        />
        投稿進度查詢
      </div>
    </div>
  </div>
</template>

<script>
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "Home",
  components: { SubmitBtn },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleSubmitIndu() {
      this.$router.push("/Industry");
    },
    handleSubmitGreen() {
      this.$router.push("/GreenTec");
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/basic/_variable.scss";
.home {
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
}

.homeContainer {
  width: 100%;
  height: 100%;
  background-image: $colorLinear;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
}

.homeLogo {
  width: 400px;
  position: absolute;
  top: 0;
  left: 0.5rem;
  z-index: 10;
  display: flex;
  align-items: center;
}

.logo {
  width: 100%;
  background: #ddd;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.mainPicContainer {
  width: 700px;
}

.mainPic {
  width: 100%;
}

.industryContainer,
.greenTecContainer {
  width: 310px;
  min-height: 80%;
  border-radius: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.industryContainer {
  background-image: url("../assets/img/首頁背景_工業污染防治刊物投稿.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 2rem;
}

.greenTecContainer {
  background-image: url("../assets/img/首頁背景_綠色技術與工程實務論文投稿.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.cardTitle {
  color: #fff;
  font-size: 1rem;
  position: relative;
  margin: 1.5rem 0;
  width: 100%;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #fff;
    top: -0.5rem;
    left: 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #fff;
    bottom: -0.5rem;
    left: 0;
  }
}
.cardContent {
  color: #fff;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 2rem;
  letter-spacing: 1.5px;
  margin-bottom: auto;
}

.searchBox {
  position: absolute;
  bottom: 0;
  right: 5%;
  background: $colorGray;
  display: flex;
  align-items: center;
  color: $colorForth;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 15px 15px 0 0;
  letter-spacing: 2px;
  cursor: pointer;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;

  &:focus {
    position: static;
    width: 100%;
    background: #fff;
    top: 0;
    z-index: 99999;
    left: 0;
    height: 16px;
    margin: 0;
    overflow: visible;
    clip: auto;
  }
}
</style>
