import { DEFAULT_HEADERS } from "../constants/constants";

const url = "https://example.org/products.json";

export async function getSamplesApi() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function createSampleApi(sample: any) {
  try {
    const response = await fetch(url,  {
        method: "POST",
        body: JSON.stringify(sample),
        headers: DEFAULT_HEADERS,
      });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
}
