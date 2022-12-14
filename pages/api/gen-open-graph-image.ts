import type { NextApiRequest, NextApiResponse } from "next";
const playwright = require("playwright-aws-lambda");
const fs = require("fs");
const script = fs.readFileSync("../../image.ts", "utf-8");

type Data = Buffer | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const browser = await playwright.launchChromium();
  const context = await browser.newContext();
  const page = await context.newPage();

  const html = `
    <!DOCTYPE html>
    <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body>
            <div id="root">
              <div>Hello world</div>
            </div>
        </body>
    </html>
  `;
  await page.setContent(html);
  await page.addScriptTag({ content: script });

  const boundingRect = await page.evaluate(() => {
    const rootElement = page.locator("#root");
    const { x, y, width, height } =
      rootElement?.children[0].getBoundingClientRect()!;
    return { x, y, width, height };
  });

  const screenShotBuffer = await page.screenshot({ clip: boundingRect! });

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", screenShotBuffer.length.toString());

  res.status(200).send(screenShotBuffer);
  await context.close();
  await browser.close();
}
