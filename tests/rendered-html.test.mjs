import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://victormundi.com/", {
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
  assert.match(html, /https:\/\/victormundi\.com\/og\.png/);
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
  assert.match(html, /personal mission/i);
  assert.match(html, /staffing and recruiting companies/i);
  assert.match(html, /Message me on LinkedIn/);
  assert.match(html, /https:\/\/github\.com\/victormundi/);
  assert.match(html, /https:\/\/www\.hiredata\.com\//);
  assert.match(html, /https:\/\/firstnames\.victormundi\.com\//);
});
