import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "https://victormundi.com"), {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "victormundi.com",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Jeroen Sakkers — Improve Every Day<\/title>/i);
  assert.match(html, /Improve Every Day/);
  assert.match(html, /Better systems\./);
  assert.match(html, /More human work\./);
  assert.match(html, /HireData/);
  assert.match(html, /Sol — Rafa &amp; Hans/);
  assert.match(html, /First Names/);
  assert.match(html, /yet\./);
  assert.match(html, /Eva Keller/);
  assert.match(html, /https:\/\/victormundi\.com\/og\.jpg/);
  assert.match(html, /\/work\/hiredata-current\.jpg/);
  assert.match(html, /\/work\/rafa-mark\.png/);
  assert.match(html, /\/work\/hans-mark\.png/);
  assert.match(html, /\/work\/rafa-current\.jpg/);
  assert.match(html, /\/work\/hans-current\.jpg/);
  assert.match(html, /\/work\/yet-mark\.png/);
  assert.match(html, /\/work\/yet-today\.jpg/);
  assert.match(html, /\/work\/yet-add\.jpg/);
  assert.match(html, /\/work\/yet-gratitude\.jpg/);
  assert.match(html, /5,000\+ recruiters/);
  assert.match(html, /Career highlight · So far/);
  assert.match(html, /then–Prime Minister Mark Rutte/);
  assert.match(html, /≈2,000/);
  assert.match(html, /Event portfolio sold/);
  assert.match(html, /youtube-nocookie\.com\/embed\/mynvKKeugcs/);
  assert.match(html, /youtube\.com\/watch\?v=mynvKKeugcs/);
  assert.match(html, /<iframe[^>]*title="Jeroen Sakkers interviews/i);
  assert.doesNotMatch(html, /youtube-nocookie[^"']*autoplay=1/i);
  assert.match(html, /Improve Every Day,/);
  assert.match(html, /in practice\./);
  assert.match(html, /\/story\/body-transformation\.mp4/);
  assert.match(html, /\/story\/body-transformation-poster\.jpg/);
  assert.match(html, /<video[^>]*controls=""[^>]*playsinline=""/i);
  assert.doesNotMatch(html, /<video[^>]*autoplay/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /class="hero-card" href="#about"/);
  assert.doesNotMatch(html, /target="_blank"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("includes the public contact and product destinations", async () => {
  const html = await (await render()).text();

  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/victormundi\//);
  assert.doesNotMatch(
    html,
    /href="https:\/\/www\.linkedin\.com\/in\/victormundi\/"[^>]*target="_blank"/,
  );
  assert.match(html, /https:\/\/twitter\.com\/victormundi/);
  assert.match(html, /@victormundi/);
  assert.match(html, /https:\/\/www\.instagram\.com\/jeroen_sakkers\//);
  assert.match(html, /https:\/\/www\.instagram\.com\/reel\/DRr097ak3ah\//);
  assert.match(html, /@jeroen_sakkers/);
  assert.match(html, /Helping people discover/i);
  assert.match(html, /their superpower/i);
  assert.match(html, /Products that create more room for people/i);
  assert.match(html, /Message me on LinkedIn/);
  assert.match(html, /https:\/\/github\.com\/victormundi/);
  assert.match(html, /https:\/\/www\.hiredata\.com\//);
  assert.match(html, /https:\/\/firstnames\.victormundi\.com\//);
  assert.doesNotMatch(html, /€10M|10M in assets|life partner|granddad/i);
  assert.doesNotMatch(html, /run my business from my phone|digital nomad|Charles Bukowski/i);
});

test("publishes robots and sitemap discovery files", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/victormundi\.com\/sitemap\.xml/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<loc>https:\/\/victormundi\.com<\/loc>/);
});
