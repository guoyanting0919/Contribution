<template>
  <div class="home">
    <!-- 左上角logo -->
    <div class="homeLogo">
      <img class="logo" src="../assets/img/LOGO.png" alt="網站logo" srcset="" />
      <span style="color: #fff">網站地圖</span>
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
      <h3 class="cardContent">
        工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿
      </h3>
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
      <h3 class="cardContent">
        工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿工業污染防治投稿
      </h3>
      <SubmitBtn
        text="我要投稿"
        style="margin-top: 1rem"
        :icon="true"
        :isGreen="true"
        @handleSubmit="handleSubmitGreen"
      />
    </div>

    <!-- 投稿進度查詢 -->
    <div class="searchBox" @click="$router.push('/Search')">
      <img
        style="margin-right: 0.5rem"
        src="../assets/img/首頁ICON_進度查詢.png"
        alt="首頁ICON_進度查詢"
        srcset=""
      />
      投稿進度查詢
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
  background-image: $colorLinear;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 5%;
}

.homeLogo {
  width: 300px;
  position: absolute;
  top: 1rem;
  left: 1rem;
  // display: flex;
}

.logo {
  width: 100%;
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
</style>
