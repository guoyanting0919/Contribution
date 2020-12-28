<template>
  <div class="webMap">
    <!-- 工業污染防治刊物投稿
綠色技術與工程實務論文投稿
投稿進度查詢 -->
    <Title title="網站地圖" />
    <div class="sitemap">
      <div class="text">
        本網站依『無障礙網頁開發規範』設計原則而建置，遵循無障礙網站設計之規範提供網頁導盲磚(:::)
        、網站導覽 (Site Navigator)、鍵盤快速鍵 (Access Key) 等設計方式。
        網站的主要樣版內容分為三個大區塊：
      </div>
      <br />
      <div class="text">1)上方導覽連結區</div>
      <div class="text">2)主要內容顯示區</div>
      <div class="text">3)下方導覽連結區</div>
      <div class="text">
        本網站的便捷鍵﹝Accesskey,也稱為快速鍵﹞設定如下：<br />
        Alt+U：最上層選單功能區，移至網頁最上方之項目位置。<br />
        Alt+C：主要內容顯示區，移至網頁之主要內容位置，若為首頁，是新聞櫥窗區塊，若為其他頁面，則為主要內容區。<br />
      </div>
      <br />
      <div class="sitemaplink">
        <div>
          1.
          <router-link to="/" target="_blank">首頁</router-link>
        </div>
        <br />
        <div>
          2.
          <router-link to="/Industry" target="_blank"
            >工業污染防治刊物投稿</router-link
          >
        </div>
        <div>
          2-1
          <router-link to="/Industry/form" target="_blank"
            >工業污染防治刊物投稿表單</router-link
          >
        </div>
        <br />
        <div>
          3.
          <router-link to="/GreenTec" target="_blank"
            >綠色技術與工程實務論文投稿</router-link
          >
        </div>
        <div>
          3-1
          <router-link to="/GreenTec/form" target="_blank"
            >綠色技術與工程實務論文投稿表單</router-link
          >
        </div>
        <br />
        <div>
          4.
          <router-link to="/Search" target="_blank">投稿進度查詢</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "webMap",
  components: { Title },
};
</script>

<style>
</style>