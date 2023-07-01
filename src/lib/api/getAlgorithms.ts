import { API_URL } from "../constants";
import AlgoInfo from "../types/AlgoInfo";

export default async function getAlgorithms(): Promise<AlgoInfo[]> {
  try {
    const endpoint = API_URL + "/algorithms";
    const response = await fetch(endpoint, { cache: "no-cache" });
    return (await response.json()).data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
