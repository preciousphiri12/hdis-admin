import axios from "axios";

const HttpRequest = {
  login: async (url, body) => {
    const response = await axios.post(url, body);
    return response;
  },
  get: async (url, header) => {
    const response = await axios.get(url, { headers: header });
    return response;
  },
  create: async (url, body, header) => {
    const response = await axios.post(url, body, { headers: header });
    return response;
  },
  update: async (url, id, body, header) => {
    const response = await axios.patch(url + "/id/" + id, body, header);
    return response;
  },
  delete: async (url, param, header) => {
    const response = await axios.delete(url + "/id/" + param, {
      headers: header,
    });
    return response;
  },
};
export default HttpRequest;
