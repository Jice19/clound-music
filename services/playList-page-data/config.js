import { JJJRequestConfig } from "../config";

const BASE_URL = "http://localhost:3000/playlist/"
const TIMEOUT = 3000 

export const PlaylistApiRequestInstance = new JJJRequestConfig(BASE_URL, TIMEOUT)
