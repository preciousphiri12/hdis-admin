import DrugCategoryService from "../api/drugCategory.api";
import useCrypto from "../utilities/cryptoJs";

const crypto = new useCrypto();
const DrugCategoryStore = {
  create: async (endpoint, data) => {
    const response = await DrugCategoryService.create(endpoint, data);
    return response;
  },
  getDrugCategories: async (endpoint) => {
    const response = await DrugCategoryService.get(endpoint);
    return response;
  },
};
export default DrugCategoryStore;
