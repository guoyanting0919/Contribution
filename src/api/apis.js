import req from "./https";

// 全域 api 掛載於 Vue.prototype
// 使用方式 this.$api
// api 命名原則 首字大寫爾後駝峰
const api = {
  IndustryDraft(params) {
    return req("post", `IndustryDraftss/Add`, params);
  },
  GreenTecDraft(params) {
    return req("post", `TechnologyDraftss/Add`, params);
  },
  UploadFiles(params) {
    return req("post", "Files/Upload", params);
  },
  GetCraftById(params) {
    return req("get", "Draftss/Get", params);
  },
  GetFileDetail(params) {
    return req("get", "Files/GetFile", params);
  },
  GetIndustryCraftList(params) {
    return req("get", "industrydraftss/load", params);
  },
  GetGreenTecList(params) {
    return req("get", "TechnologyDraftss/load", params);
  },
};

export default api;
