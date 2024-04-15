import useCrypto from "../utilities/cryptoJs";
import SectionService from "../api/section.api";

const crypto = new useCrypto();
const SectionStore = {
  create: async (endpoint, data) => {
    const response = await SectionService.create(endpoint, data);
    return response;
  },
  getSections: async (endpoint) => {
    const response = await SectionService.get(endpoint);
    return response;
  },
};
export default SectionStore;
