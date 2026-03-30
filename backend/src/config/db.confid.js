import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client.ts";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const globalForPrisma = globalThis;

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pgPool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
