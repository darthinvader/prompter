import ScrapingAntClient from "@scrapingant/scrapingant-client";

const client = new ScrapingAntClient({
  apiKey: "47ea69e05dec4bbc8e5288a3cec3fa02",
});

export const scrape = () => {
  client
    .scrape(
      "https://describingwords.io/api/descriptors?term=sword&sortType=frequency"
    )
    .then((res) =>
      console.log(
        JSON.parse(
          res.content
            .replace("<html><head></head><body>", "")
            .replace("</body></html>", "")
        )
      )
    )
    .catch((err) => console.error(err.message));
};
