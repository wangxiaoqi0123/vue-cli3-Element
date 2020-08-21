import request from "@/libs/request";

export class InformationCollection {
  // Mock
  static bankQuery() {
    return request({
      url: "/information_collection/bank/query",
      method: "post"
    });
  }
}
