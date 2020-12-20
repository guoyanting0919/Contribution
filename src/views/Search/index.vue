<template>
  <div class="search">
    <Title title="投稿進度查詢" />
    <div class="subContainer">
      <h1 class="searchTodo">查詢投稿進度,請輸入投稿題目</h1>
      <!-- query box -->
      <template>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-radio-group v-model="typeRadio" row>
                  <template v-slot:label>
                    <div>查詢項目</div>
                  </template>
                  <v-radio value="Industrty">
                    <template v-slot:label>
                      <div class="primary--text">工業污染防治刊物投稿</div>
                    </template>
                  </v-radio>
                  <v-radio value="GreenTec" color="success">
                    <template v-slot:label>
                      <div class="success--text">
                        綠色技術與工程實務論文投稿
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12" md="10">
                <v-text-field
                  v-model="listQuery.key"
                  :counter="10"
                  label="關鍵字"
                  required
                  :autocomplete="false"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2">
                <SubmitBtn
                  style="width: 100%; text-align: center"
                  text="查詢"
                  :disabled="btnDisabled"
                  @handleSubmit="handleSubmit"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </template>

      <!-- table -->
      <template>
        <div>
          <v-data-table
            :headers="headers"
            :items="tableList"
            :loading="btnDisabled"
            loading-text="資料載入中...請稍候"
            no-data-text="查無資料"
            :options="op"
            class="elevation-1"
            :footer-props="{
              'items-per-page-text': '每頁筆數',
            }"
          >
            <!-- 客製化table欄位 -->

            <!-- 投稿日期 -->
            <template v-slot:[`item.createDate`]="{ item }">
              <span v-if="item.createDate">
                {{ item.createDate | dateFilter }}
              </span>
              <span v-else> - </span>
            </template>

            <!-- 複審狀態 -->
            <template v-slot:[`item.reviewStatusName`]="{ item }">
              {{ item.reviewStatusName || "-" }}
            </template>

            <!-- 採用情形 -->
            <template v-slot:[`item.useSituation`]="{ item }">
              {{ item.useSituation || "-" }}
            </template>

            <!-- 預計上刊期別 -->
            <template v-slot:[`item.period`]="{ item }">
              {{ item.period || "-" }}
            </template>

            <!-- 摘要狀況 -->
            <template v-slot:[`item.summaryStatus`]="{ item }">
              {{ item.summaryStatus || "-" }}
            </template>

            <!-- 全文投稿時間 -->
            <template v-slot:[`item.submissionDate`]="{ item }">
              <span v-if="item.submissionDate">
                {{ item.submissionDate | dateFilter }} 前
              </span>
              <span v-else> - </span>
            </template>

            <!-- 全文投稿 -->
            <template v-slot:[`item.submissionFile`]="{ item }">
              {{ item.submissionFile || "-" }}
            </template>
          </v-data-table>
        </div>
      </template>
    </div>
  </div>
</template>
   

<script>
import moment from "moment";
import Title from "@/components/Title";
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "search",
  components: { Title, SubmitBtn },
  data() {
    return {
      valid: false,
      btnDisabled: false,

      /* 工業污染 */
      industryList: [],

      /* 綠色技術 */
      greenTecList: [],

      /* query */
      typeRadio: "Industrty",
      listQuery: {
        key: undefined,
        page: 1,
        limit: 999,
      },

      /* table 相關 */
      op: {
        page: 1,
        itemsPerPage: 5,
      },
      footer: {
        props: {
          itemsPerPageText: "string",
        },
      },

      /* 工業污染表頭 */
      idustryHeaders: [
        {
          text: "投稿題目",
          align: "start",
          value: "title",
        },
        { text: "投稿日期", value: "createDate" },
        { text: "初審狀況", value: "initStatusName" },
        { text: "複審狀況", value: "reviewStatusName" },
        { text: "採用情形", value: "useSituation" },
        { text: "預計上刊期別", value: "period" },
      ],

      /* 綠色技術表頭 */
      headersGreenTec: [
        {
          text: "篇名",
          align: "start",
          value: "title",
        },
        { text: "摘要狀況", value: "summaryStatus" },
        { text: "審查意見", value: "statusName" },
        { text: "全文投稿時間", value: "submissionDate" },
        { text: "全文投稿", value: "submissionFile" },
      ],
    };
  },
  computed: {
    headers() {
      const vm = this;
      if (vm.typeRadio === "Industrty") {
        return vm.idustryHeaders;
      } else {
        return vm.headersGreenTec;
      }
    },
    tableList() {
      const vm = this;
      if (vm.typeRadio === "Industrty") {
        return vm.industryList;
      } else {
        return vm.greenTecList;
      }
    },
  },
  filters: {
    dateFilter(date) {
      return moment(date).format("yyyy-MM-DD");
    },
  },
  methods: {
    handleSubmit() {
      this.getList();
    },
    getList() {
      const vm = this;
      vm.btnDisabled = true;
      if (vm.typeRadio === "Industrty") {
        vm.$api.GetIndustryCraftList(vm.listQuery).then((res) => {
          console.log(res);
          vm.industryList = res.data.data;
          vm.btnDisabled = false;
        });
      } else {
        vm.$api.GetGreenTecList(vm.listQuery).then((res) => {
          console.log(res);
          vm.greenTecList = res.data.data;
          vm.btnDisabled = false;
        });
      }
    },
    isEnabled(i) {
      console.log(i);
    },
  },
  mounted() {
    // this.getList();
  },
};
</script>

<style lang='scss' scoped>
.searchTodo {
  text-align: center;
  font-size: 1rem;
  color: red;
}
::v-deep .v-progress-linear .v-progress-linear__indeterminate--active .long {
  height: 0.25rem;
}
::v-deep .v-progress-linear .v-progress-linear__indeterminate--active .short {
  height: 0.25rem;
}
</style>