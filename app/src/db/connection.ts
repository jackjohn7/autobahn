import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { serverEnv } from '@/env.mjs';

const sql = neon(serverEnv.DB.URL);
export const db = drizzle(sql);
