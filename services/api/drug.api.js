const { default: HttpRequest } = require("../httpRequest/httpRequest");

const URL = process.env.NEXT_PUBLIC_URL;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJzdXBlcnVzZXIiLCJyb2xlaWQiOjF9LCJpYXQiOjE3MTE5NzQ2ODUsImV4cCI6MTcxMjAxMDY4NX0.Xe4z9b9uTRt5BNUxw8-hvqDfbhpEV4xJ5ssx29t4Yoo");
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

const DrugService = {
  get: async (endpoint) => {
    const user = await HttpRequest.get(`${URL}/${endpoint}`, headers);
    return user;
  },
  create: async (endpoint, data) => {
    const user = await HttpRequest.create(`${URL}/${endpoint}`, data, headers);
    return user;
  },
};
export default DrugService;
