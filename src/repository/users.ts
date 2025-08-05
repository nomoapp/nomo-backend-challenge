import { db } from "./db";

const create = async ({name, email}: { name: string, email: string }) => {
  const result = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
  return result.rows[0]
}

const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users ORDER BY created_at DESC')
  return result.rows
}

export const usersRepository = {
  create,
  getAllUsers
}