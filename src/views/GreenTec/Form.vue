<template>
  <div class="greenTecForm">
    <!-- <h1 class="formTodo">
      工業污染防治刊物線上投稿,請填寫以下欄位,以下欄位均為必填
    </h1> -->
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="temp.title"
          autocomplete="off"
          :rules="requirdRules"
          label="投稿題目"
          required
        ></v-text-field>

        <v-text-field
          v-model="temp.authors"
          autocomplete="off"
          :rules="requirdRules"
          label="作者群"
          required
        ></v-text-field>

        <v-text-field
          v-model="temp.mainContact"
          autocomplete="off"
          :rules="requirdRules"
          label="主要聯絡人"
          required
        ></v-text-field>

        <v-text-field
          v-model="temp.contactInfo"
          autocomplete="off"
          :counter="10"
          :rules="requirdRules"
          label="聯絡資訊(聯絡人手機)"
          required
        ></v-text-field>

        <v-text-field
          v-model="temp.email"
          autocomplete="off"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
          style="margin-top: 1rem"
          outlined
          name="input-7-4"
          label="摘要"
          v-model="temp.summary"
        ></v-textarea>

        <v-file-input
          required
          show-size
          loading
          v-model="files"
          accept=".pdf"
          :rules="uploadRules"
          label="點擊上傳 (限定pdf檔)"
        ></v-file-input>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || '您必須同意個人資料保護法義務內容']"
          label="我已閱讀並同意個人資料保護法義務內容"
          required
        >
          <template v-slot:label>
            <div>
              我已閱讀並同意

              <a target="_blank" href="http://vuetifyjs.com" @click.stop>
                個人資料保護法義務內容
              </a>
            </div>
          </template>
        </v-checkbox>
        <div class="formButtom" style="margin-top: 1rem">
          <SubmitBtn
            :disabled="btnDisabled"
            text="我要投稿"
            @handleSubmit="handleValidate"
          />
        </div>
      </v-form>
    </template>
  </div>
</template>
 

<script>
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "greenTecForm",
  data() {
    return {
      /* base url */
      baseUrl: process.env.VUE_APP_BASE_API,

      /* 表單模板 */
      temp: {
        id: "",
        title: "",
        authors: "",
        mainContact: "",
        contactInfo: "",
        email: "",
        files: "",
        summary: "",
      },

      /* pdf黨 */
      files: null,

      /* 驗證規則 */
      valid: true,
      requirdRules: [(v) => !!v || "必填欄位"],
      emailRules: [
        (v) => !!v || "E-mail為必填欄位",
        (v) => /.+@.+\..+/.test(v) || "請填寫正確的E-mail格式",
      ],
      uploadRules: [(v) => !!v || "請確實上傳pdf檔"],

      /* 是否同意條款 */
      checkbox: false,

      /* 按鈕防呆 */
      btnDisabled: false,
    };
  },
  components: {
    SubmitBtn,
  },
  methods: {
    /* 驗證表單 */
    handleValidate() {
      const vm = this;
      if (this.$refs.form.validate()) {
        vm.submitFiles();
      } else {
        vm.btnDisabled = false;
      }
    },

    /* 檔案上傳 */
    submitFiles() {
      const vm = this;
      vm.btnDisabled = true;
      if (this.files) {
        let formData = new FormData();
        // files
        // for (let file of this.files) {
        //   formData.append("files", file, file.name);
        //   console.log(file);
        // }
        // additional data
        formData.append("filesreq", this.files, this.files.name);

        vm.$http
          .post(`${vm.baseUrl}Files/UploadWithStr?startstr=S`, formData)
          .then((response) => {
            vm.$alertM.fire({
              icon: "info",
              title: `檔案上傳中...請稍候`,
            });
            console.log(response.data.result[0].id);
            vm.temp.files = response.data.result[0].id;
            vm.handleSubmit();
          })
          .catch((error) => {
            vm.$alertM.fire({
              icon: "error",
              title: `檔案上傳失敗`,
            });
            vm.btnDisabled = false;
          });
      } else {
        console.log("there are no files.");
      }
    },

    /* 送出表單 */
    handleSubmit() {
      const vm = this;
      vm.$api.GreenTecDraft(vm.temp).then(() => {
        vm.$alertM.fire({
          icon: "success",
          title: `投稿成功`,
        });
        vm.$router.push("/greenTec");
      });
    },
  },
};
</script>

<style lang='scss' scopde>
.formTodo {
  font-size: 1rem;
  color: red;
  font-weight: 500;
  text-align: center;
}

.formButtom {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
</style>