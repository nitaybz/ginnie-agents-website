#!/usr/bin/env node
// Generate an image via Google Gemini's Imagen API.
// Usage: node scripts/gen-image.mjs --prompt "..." --output public/img/foo.png [--aspect 1:1|16:9|9:16|4:3|3:4]

import fs from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
function arg(name, alias) {
  const i = args.findIndex((a) => a === name || a === alias);
  return i >= 0 ? args[i + 1] : undefined;
}

const prompt = arg("--prompt", "-p");
const output = arg("--output", "-o");
const aspect = arg("--aspect", "-a") || "1:1";

if (!prompt || !output) {
  console.error("usage: gen-image.mjs --prompt <text> --output <path> [--aspect 1:1|16:9|9:16|4:3|3:4]");
  process.exit(1);
}

// Load .env.local
try {
  const env = await fs.readFile(path.join(process.cwd(), ".env.local"), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) process.env[m[1]] = m[2];
  }
} catch {
  /* ignore */
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY missing in env or .env.local");
  process.exit(1);
}

// Try Imagen 4 fast first, fall back to Imagen 3 fast.
const candidates = [
  "imagen-4.0-fast-generate-001",
  "imagen-4.0-generate-001",
  "imagen-3.0-fast-generate-001",
  "imagen-3.0-generate-002",
];

let imageBase64 = null;
let usedModel = null;
let lastError = null;

for (const model of candidates) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`;
  const body = {
    instances: [{ prompt }],
    parameters: { sampleCount: 1, aspectRatio: aspect, personGeneration: "allow_adult" },
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    if (!res.ok) {
      lastError = `${model}: ${res.status} ${JSON.stringify(json).slice(0, 200)}`;
      continue;
    }
    const pred = json?.predictions?.[0];
    const b64 =
      pred?.bytesBase64Encoded ||
      pred?.imageBytesBase64Encoded ||
      pred?.image?.imageBytes;
    if (b64) {
      imageBase64 = b64;
      usedModel = model;
      break;
    }
    lastError = `${model}: no image bytes in response`;
  } catch (e) {
    lastError = `${model}: ${e.message}`;
  }
}

if (!imageBase64) {
  console.error("All Imagen models failed. Last error:", lastError);
  process.exit(2);
}

await fs.mkdir(path.dirname(output), { recursive: true });
await fs.writeFile(output, Buffer.from(imageBase64, "base64"));
const stat = await fs.stat(output);
console.log(JSON.stringify({ success: true, model: usedModel, output, bytes: stat.size }));
