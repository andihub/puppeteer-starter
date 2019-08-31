import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  const res = await page.evaluate(name => {
    debugger;

    var h1Text = document.getElementsByTagName("h1")[0].innerText;
    console.log("Browser says", h1Text);

    return "Hello " + name;
  }, "World!");
  console.log("Node says", res);

  await browser.close();
})();
