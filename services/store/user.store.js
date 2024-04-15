import Cookies from "js-cookie";
import useCrypto from "../utilities/cryptoJs";
import UserService from "../api/user.api";

const crypto = new useCrypto();
const UserStore = {
  login: async (data) => {
    const response = await UserService.login(data);
    if (response?.data?.error == false) {
      let user = JSON.stringify(response.data.user);
      let token = { token: response.data.token };
      // PTV=Pharmacy Token Value
      Cookies.set("PTV", crypto.encrypt(JSON.stringify(token)), {
        expires: 5 / 24,
        sameSite: "lax",
      });
      // PUV=Pharmacy User Values
      Cookies.set("PUV", crypto.encrypt(user), {
        expires: 5 / 24,
        sameSite: "lax",
      });
    }
    return response;
  },
  getUsers: async (endpoint) => {
    const response = await UserService.get(endpoint);
    if (response?.data?.error == false) {
      let user = JSON.stringify(response.data.user);
      let token = { token: response.data.token };
      Cookies.set("PTV", crypto.encrypt(JSON.stringify(token)), {
        expires: 5 / 24,
        sameSite: "lax",
      });
      Cookies.set("PUV", crypto.encrypt(user), {
        expires: 5 / 24,
        sameSite: "lax",
      });
    }
    return response;
  },
};
export default UserStore;
