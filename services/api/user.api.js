const { default: HttpRequest } = require("../httpRequest/httpRequest");

const URL = process.env.NEXT_PUBLIC_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

const UserService = {
  login: async (data) => {
    const user = await HttpRequest.login(`${URL}/${endpoint}`, data);
    return user;
  },
  get: async (endpoint) => {
    const user = await HttpRequest.get(`${URL}/${endpoint}`, headers);
    return user;
  },
  create: async (endpoint, data) => {
    const user = await HttpRequest.get(`${URL}/${endpoint}`, data, headers);
    return user;
  },
};
export default UserService;
