import { Pool } from 'pg';

export const db = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'task_management',
  user: 'admin',
  password: 'password',
});