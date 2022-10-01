const playwright = require("playwright-aws-lambda");
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  isBase64Encoded: boolean;
  headers: object;
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("open graph image call");
  const browser = await playwright.launchChromium();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent(`<!DOCTYPE html>
    <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body>
            <div id="corgi>
            Hello
            </div>
        </body>
    </html>
  `);
  const boundingRect = await page.evaluate(() => {
    const corgi = document.getElementById("corgi");
    const { x, y, width, height } = corgi!.children[0].getBoundingClientRect();
    console.log(corgi!.children[0]);
    return { x, y, width, height };
  });

  const screenShotBuffer = await page.screenshot({ clip: boundingRect });
  res.status(200).json({
    isBase64Encoded: true,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": screenShotBuffer.length.toString(),
    },
    body: screenShotBuffer.toString("base64"),
  });
  await context.close();
  await browser.close();
}
