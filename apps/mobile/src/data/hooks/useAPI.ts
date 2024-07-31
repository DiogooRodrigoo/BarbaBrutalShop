import { useCallback } from "react";

const URL_BASE = process.env.URL_BASE;

export default function useAPI() {
  console.log("URL_BASE", URL_BASE);
  const httpGet = useCallback(async function (uri: string): Promise<any> {
    try {
      const res = await fetch(`${URL_BASE}/${uri}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const httpPost = useCallback(async function (
    uri: string,
    body: any
  ): Promise<any> {
    await fetch(`${URL_BASE}/${uri}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(body),
    });
  }, []);

  return { httpGet, httpPost };
}
