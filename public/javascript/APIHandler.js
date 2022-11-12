class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const { data } = await axios({
      method: "get",
      baseURL: `${this.BASE_URL}/characters`,
    });
    return data;
  }

  getOneRegister() {}

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
