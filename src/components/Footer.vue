<template>
  <div class="customFooter">
    <!-- copyRightBox -->
    <div class="copyRightBox">
      <p class="copyRightTxt">
        版權所有,轉載必究(C)2020財團法人台灣產業服務基金會 All Rights Reserved
      </p>
      <p class="copyRightTxt">建議最佳螢幕解析度1027X768以上 chrome瀏覽軟體</p>
    </div>

    <!-- logoBox -->
    <div class="logoBox">
      <img
        style="margin-right: 1rem"
        class="footerLogo"
        src="../assets/img/FOOTER_指導單位.png"
        alt="指導單位logo"
        srcset=""
      />
      <img
        class="footerLogo"
        src="../assets/img/FOOTER_執行單位.png"
        alt="執行單位logo"
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "customFooter",
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";
.customFooter {
  width: 100%;
  height: $footerHeight;
  background: $colorGray;
  position: relative;
  padding: 0 5%;
  display: flex;
}

.copyRightBox {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.copyRightTxt {
  font-size: 0.725rem;
  margin: 0;
}

.logoBox {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.footerLogo {
  width: 230px;
}
</style>