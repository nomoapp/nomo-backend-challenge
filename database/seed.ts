import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'task_management',
  user: 'admin',
  password: 'password',
})

async function seed() {
  try {
    // Seed users
    const users = [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' },
      { name: 'Bob Johnson', email: 'bob@example.com' },
      { name: 'Alice Brown', email: 'alice@example.com' },
    ]

    for (const user of users) {
      await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING',
        [user.name, user.email]
      )
    }

    // Seed tasks
    const tasks = [
      { title: 'Setup project', description: 'Initialize the new project structure', status: 'completed', priority: 'high', user_id: 1 },
      { title: 'Design database', description: 'Create ERD and database schema', status: 'completed', priority: 'high', user_id: 1 },
      { title: 'Implement API endpoints', description: 'Create REST API for task management', status: 'in_progress', priority: 'high', user_id: 2 },
      { title: 'Write tests', description: 'Unit and integration tests', status: 'pending', priority: 'medium', user_id: 2 },
      { title: 'Documentation', description: 'API documentation with OpenAPI', status: 'pending', priority: 'low', user_id: 3 },
      { title: 'Frontend integration', description: 'Connect frontend with API', status: 'pending', priority: 'medium', user_id: 3 },
      { title: 'Performance optimization', description: 'Optimize database queries', status: 'pending', priority: 'low', user_id: 4 },
      { title: 'Security audit', description: 'Review security vulnerabilities', status: 'in_progress', priority: 'urgent', user_id: 4 },
    ]

    for (const task of tasks) {
      await pool.query(
        'INSERT INTO tasks (title, description, status, priority, user_id) VALUES ($1, $2, $3, $4, $5)',
        [task.title, task.description, task.status, task.priority, task.user_id]
      )
    }

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await pool.end()
  }
}

seed()