import { db } from "./db";

const createTask = async ({ title, description, status, priority, userId }: {
  title: string,
  description: string,
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled',
  priority: 'low' | 'medium' | 'high' | 'urgent',
  userId: string
}) => {
  const result = await db.query(
    'INSERT INTO tasks (title, description, status, priority, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, status, priority, userId]
  )
  return result.rows[0]
}

const getTaskById = async ({ id }: { id: string }) => {
  const result = await db.query(
    'SELECT * FROM tasks WHERE id = $1',
    [id]
  )
  return result.rows
}

const getUserTasks = async ({ userId }: { userId: string }) => {
  const result = await db.query(
    'SELECT * FROM tasks WHERE user_id = $1 AND status != "deleted" ORDER BY created_at DESC',
    [userId]
  )
  return result.rows
}

const getAllTasks = async () => {
  const result = await db.query(`
    SELECT t.*, u.name as user_name 
    FROM tasks t 
    LEFT JOIN users u ON t.user_id = u.id 
    ORDER BY t.created_at DESC
  `)
  return result.rows
}

const updateTask = async ({ status }: { status: 'pending' | 'in_progress' | 'completed' | 'cancelled' }) => {
  // TODO: Implementar actualización del estado de una tarea
  // const result = await db.query(``)
  // return result.rows
}

const deleteTask = async ({ id }: { id: string }) => {
  const result = await db.query(
    'DELETE FROM tasks WHERE id = $1 RETURNING *',
    [id]
  )
}

export const tasksRepository = {
  createTask,
  getTaskById,
  getUserTasks,
  getAllTasks,
  updateTask,
  deleteTask
}