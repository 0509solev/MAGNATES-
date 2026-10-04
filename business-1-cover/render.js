const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const dir = __dirname;
  const browser = await chromium.launch();
  // Legal = 8.5 x 14 in = 816 x 1344 CSS px; scale 3.125 => 300 DPI (2550 x 4200 px)
  const page = await browser.newPage({ viewport: { width: 816, height: 1344 }, deviceScaleFactor: 3.125 });
  page.on('pageerror', e => { console.error('page error:', e.message); process.exitCode = 1; });
  await page.goto('file://' + path.join(dir, 'cover.html'));
  await page.waitForFunction(() => document.body.dataset.drawn === '1');
  await page.evaluate(() => document.fonts.ready);
  console.log((await page.evaluate(() => [...document.fonts].map(f => `${f.family} ${f.style} ${f.weight} ${f.status}`))).join('\n'));
  await page.screenshot({ path: path.join(dir, 'Business-1-Cover.png') });
  const p2 = await browser.newPage();
  await p2.goto('file://' + path.join(dir, 'wrap.html'));
  await p2.waitForFunction(() => document.images[0].complete && document.images[0].naturalWidth > 0);
  await p2.pdf({ path: path.join(dir, 'Business-1-Cover.pdf'), width: '8.5in', height: '14in', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await browser.close();
})();
