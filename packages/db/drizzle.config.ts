// drizzle.config.ts
import type { Config } from "drizzle-kit";

import "dotenv/config";

export default {
  connectionString: process.env.DATABASE_URL,
  schema: ["./drizzle/auth.ts", "./drizzle/schema.ts"],
  out: "./drizzle/out",
} satisfies Config;
