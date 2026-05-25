import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const home = resolve(root, ".wrangler-home");
const config = resolve(root, ".wrangler-config");
const cache = resolve(root, ".wrangler-cache");
const logs = resolve(root, ".wrangler-logs");

for (const directory of [home, config, cache, logs]) {
  mkdirSync(directory, { recursive: true });
}

const astroBin = resolve(root, "node_modules/astro/bin/astro.mjs");

const result = spawnSync(process.execPath, [astroBin, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    HOME: home,
    USERPROFILE: home,
    APPDATA: config,
    LOCALAPPDATA: cache,
    XDG_CONFIG_HOME: config,
    XDG_CACHE_HOME: cache,
    WRANGLER_LOG_PATH: logs,
    WRANGLER_SEND_METRICS: "false",
    ASTRO_TELEMETRY_DISABLED: "1",
    TELEMETRY_DISABLED: "1",
  },
});

process.exit(result.status ?? 1);
