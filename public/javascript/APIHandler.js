class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: baseUrl });
  }

  async getFullList() {
    const { data } = await this.api.get(`/characters`);
    return data;
  }

  async getOneRegister(id) {
    const { data } = await axios({
      method: "get",
      baseURL: `${this.BASE_URL}/characters/${id}`,
    });
    return data;
  }

  async createOneRegister(data) {
    await this.api.post(`/characters/`, data);
  }

  async updateOneRegister(data, id) {
    await this.api.put(`/characters/${id}`, data);
  }

  deleteOneRegister(id) {
    this.api.delete(`/characters/${id}`).catch((error) => console.log(error + "hiho"));
  }
}

// tried different ways for every function (usinc await/then/this.api/etc.)
