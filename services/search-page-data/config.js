import { JJJRequestConfig } from "../config/index";

const BASE_URL = "http://localhost:3000/search/"
const TIMEOUT = 3000 

export const SearchApiRequestInstance = new JJJRequestConfig(BASE_URL, TIMEOUT)