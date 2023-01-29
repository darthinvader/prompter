import ScrapingAntClient from "@scrapingant/scrapingant-client";

const client = new ScrapingAntClient({
  apiKey: "47ea69e05dec4bbc8e5288a3cec3fa02",
});

export const describeWord = async (word: string) => {
  return await client
    .scrape(
      `https://describingwords.io/api/descriptors?term=${word}&sortType=frequency`
    )
    .then((res: { content: string }) =>
      JSON.parse(
        res.content
          .replace("<html><head></head><body>", "")
          .replace("</body></html>", "")
      )
    )
    .catch((err) => console.error(err.message));
};

export const describeWordUnique = async (word: string) => {
  return await client
    .scrape(
      `https://describingwords.io/api/descriptors?term=${word}&sortType=unique`
    )
    .then((res: { content: string }) =>
      JSON.parse(
        res.content
          .replace("<html><head></head><body>", "")
          .replace("</body></html>", "")
      )
    )
    .catch((err) => console.error(err.message));
};

export const relatedWords = async (word: string) => {
  return await client
    .scrape(`https://relatedwords.org/api/related?term=${word}`)
    .then((res: { content: string }) =>
      JSON.parse(
        res.content
          .replace(
            '<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">',
            ""
          )
          .replace("</pre></body></html>", "")
      )
    )
    .catch((err) => console.error(err.message));
};
