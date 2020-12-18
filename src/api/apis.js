import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  CaseUserCommonAddr() {
    return req("get", `CaseUserCommonAddr/GetByContactId?contactUserId`);
  },
  UploadFiles(params) {
    return req("post", "Files/Upload", params);
  },
};

export default api;
