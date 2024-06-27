import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

if (!env.POSTGRES_URL) throw new Error('POSTGRES_URL is not set');

const client = neon(env.POSTGRES_URL);
export const db = drizzle(client, { schema });
