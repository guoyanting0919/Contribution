<template>
  <div class="industryDescription">
    <vue-editor disabled id="editor" v-model="temp.contents"></vue-editor>
    <div class="exampleContainer">
      <img src="../../assets/img/內頁ICON_稿件範例.png" alt="" srcset="" />
      <div class="examplePdfBox">
        <a v-for="item in filesList" :key="item.id" target="_blank" :href="`${baseUrl}${item.filePath}`">{{ item.fileName }}</a>
      </div>
    </div>
    <SubmitBtn text="我要投稿" style="margin: auto; margin-top: 1rem" :disabled="!isDate" :icon="true" @handleSubmit="$router.push('/Industry/Form')" />
  </div>
</template>

<script>
import moment from "moment";
import { VueEditor } from "vue2-editor";
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "industryDescription",
  components: { SubmitBtn, VueEditor },
  data() {
    return {
      /* base url */
      baseUrl: process.env.VUE_APP_BASE_IMG_URL,
      /* 檔案列表 */
      filesList: [],
      /* 活動時間 */
      isDate: false,
      /* 模板 */
      temp: {
        contents: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("handleSubmit");
    },
    getList() {
      const vm = this;
      vm.$api.GetCraftById({ id: "MANUCATEGORY_INDUSTRY" }).then((res) => {
        vm.isDate = moment(new Date()).isBetween(
          res.data.result.startDate,
          res.data.result.endDate
        );
        vm.temp = Object.assign({}, res.data.result);
        let filesArr = vm.temp.files.split(",");
        filesArr.forEach((id) => {
          vm.getFilesDetail(id);
        });
      });
    },
    getFilesDetail(fileIds) {
      const vm = this;
      vm.$api.GetFileDetail({ fileIds }).then((res) => {
        vm.filesList.push(res.data.result[0]);
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/basic/_variable.scss";

.exampleContainer {
  width: 100%;
  background: $colorGray;
  border-radius: 200px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}
.examplePdfBox {
  display: flex;
  flex-direction: column;
  margin-left: 4rem;

  a {
    color: #444;
  }
}
::v-deep .quillWrapper .ql-snow.ql-toolbar {
  display: none;
}

::v-deep .quillWrapper {
  border-top: 1px solid #c3c2c2;
  margin-bottom: 2rem;
}
</style>