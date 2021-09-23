import CMSRequest from "@/api/request";
import { BASE_URL, TIME_OUT } from "@/api/request/config";

const cmsRequest = new CMSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
export default cmsRequest;
