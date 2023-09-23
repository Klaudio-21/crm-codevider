const puppeteer = require('puppeteer');

test('We can launch a browser', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('http://192.168.1.24:3000/');



  // const text = await page.$eval('.mp-heading', el => el.innerHTML);
  // expect(text).toEqual('My Profile'); 
});

jest.setTimeout(30000);