import { API_URL } from "../constants";
import AlgoInfo from "../types/AlgoInfo";

/**
 * Get metadata (information) for an algorithm
 * @param name name of algorithm to get
 * @returns Metadata for algorithm
 */
export default async function getAlgorithm(name: string): Promise<AlgoInfo> {
  const endpoint = API_URL + "/" + name;
  const response = await fetch(endpoint);
  return (await response.json()).data;
}
