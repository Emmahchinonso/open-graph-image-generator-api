import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = Buffer | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

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

  const rootContainer = await page.$("#root");
  const boundingRect = await rootContainer?.boundingBox();

  const screenShotBuffer = await page.screenshot({ clip: boundingRect! });

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Length", screenShotBuffer.length.toString());

  res.status(200).send(screenShotBuffer);
  await browser.close();
}
