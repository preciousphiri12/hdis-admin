import DrugService from "../api/drug.api";
import useCrypto from "../utilities/cryptoJs";

const crypto = new useCrypto();
const DrugStore = {
  create: async (endpoint, data) => {
    const response = await DrugService.create(endpoint, data);
    return response;
  },
  getDrugs: async (endpoint) => {
    const response = await DrugService.get(endpoint);
    return response;
  },
};
export default DrugStore;
