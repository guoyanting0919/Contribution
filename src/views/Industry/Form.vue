<template>
  <div class="industryForm">
    <!-- <h1 class="formTodo">
      工業污染防治刊物線上投稿,請填寫以下欄位,以下欄位均為必填
    </h1> -->
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          autocomplete="off"
          :rules="nameRules"
          label="投稿題目"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          autocomplete="off"
          :rules="nameRules"
          label="作者群"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          autocomplete="off"
          :rules="nameRules"
          label="主要聯絡人"
          required
        ></v-text-field>

        <v-text-field
          v-model="name"
          autocomplete="off"
          :counter="10"
          :rules="nameRules"
          label="聯絡資訊"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
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
          v-model="email"
        ></v-textarea>

        <v-file-input
          required
          show-size
          loading
          v-model="files"
          accept=".pdf"
          :rules="uploadRules"
          label="點擊上傳"
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
          <SubmitBtn text="我要投稿" @handleSubmit="submitFiles" />
        </div>

        <!-- <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn> -->

        <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
        </v-btn> -->
      </v-form>
    </template>
  </div>
</template>
 

<script>
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "industryForm",
  data() {
    return {
      temp: {},
      name: "",
      email: "",
      files: null,
      /* 驗證規則 */
      valid: true,
      nameRules: [(v) => !!v || "請確實填寫作者群欄位"],
      emailRules: [
        (v) => !!v || "E-mail為必填欄位",
        (v) => /.+@.+\..+/.test(v) || "請填寫正確的E-mail格式",
      ],
      uploadRules: [(v) => !!v || "請確實上傳pdf檔"],

      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    };
  },
  components: {
    SubmitBtn,
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    handleSubmit() {
      this.validate();
    },
    submitFiles() {
      const vm = this;
      console.log(this.files);
      if (this.files) {
        let formData = new FormData();

        // files
        // for (let file of this.files) {
        //   formData.append("files", file, file.name);
        //   console.log(file);
        // }

        // additional data
        formData.append("files", this.files, this.files.name);

        // vm.$api.UploadFiles(formData).then((res) => {
        //   console.log(res);
        // });

        vm.$http
          .post("http://simpleweb.unitgo.tw/api/Files/Upload", formData)
          .then((response) => {
            console.log("Success!");
            console.log({ response });
          })
          .catch((error) => {
            console.log({ error });
          });
      } else {
        console.log("there are no files.");
      }
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