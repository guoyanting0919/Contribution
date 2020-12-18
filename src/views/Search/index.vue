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
                <v-radio-group v-model="lastname" row>
                  <template v-slot:label>
                    <div>查詢項目</div>
                  </template>
                  <v-radio value="Google">
                    <template v-slot:label>
                      <div class="primary--text">工業污染防治刊物投稿</div>
                    </template>
                  </v-radio>
                  <v-radio value="Duckduckgo" color="success">
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
                  v-model="lastname"
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
            :items="desserts"
            class="elevation-1"
          ></v-data-table>
        </div>
      </template>
    </div>
  </div>
</template>
   

<script>
import Title from "@/components/Title";
import SubmitBtn from "@/components/SubmitBtn";
export default {
  name: "search",
  components: { Title, SubmitBtn },
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      headers: [
        {
          text: "投稿題目",
          align: "start",
          value: "name",
        },
        { text: "投稿日期", value: "calories" },
        { text: "初審狀況", value: "fat" },
        { text: "複審狀況", value: "carbs" },
        { text: "採用情形", value: "protein" },
        { text: "預計上刊期別", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {},
    toggleOrder() {
      this.sortDesc = !this.sortDesc;
    },
    nextSort() {
      let index = this.headers.findIndex((h) => h.value === this.sortBy);
      index = (index + 1) % this.headers.length;
      this.sortBy = this.headers[index].value;
    },
  },
};
</script>

<style lang='scss' scoped>
.searchTodo {
  text-align: center;
  font-size: 1rem;
  color: red;
}
</style>