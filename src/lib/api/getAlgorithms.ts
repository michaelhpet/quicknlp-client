import { API_URL } from "../constants";
import AlgoInfo from "../types/AlgoInfo";

export default async function getAlgorithms(): Promise<AlgoInfo[]> {
  try {
    const endpoint = API_URL + "/algorithms";
    const response = await fetch(endpoint);
    return (await response.json()).data;
  } catch (error) {
    console.log(error);
    return [
      {
        name: "Paraphrasing",
        description:
          "Paraphrase generation is the task of generating an output sentence that preserves the meaning of the input sentence with variations in word choice and grammar. Two sentences are paraphrases if their meanings are equivalent but their words and syntax are different.",
        href: "paraphrasing",
        aboutUrl: "",
      },
      {
        name: "Grammar checking",
        description:
          "Grammar checking is one of the most widely used tools within natural language processing (NLP) applications. Grammar checkers check the grammatical structure of sentences based on morphological processing and syntactic processing.",
        href: "grammar-checking",
        aboutUrl: "",
      },
      {
        name: "Summarization",
        description:
          "Text summarization is the problem of reducing number of sentences and words of a document without changing its meaning. There are different techniques to extract information from raw text data and use it for a summarization model. Overall, they can be categorized as Extractive and Abstractive.",
        href: "summarization",
        aboutUrl: "",
      },
    ];
  }
}
