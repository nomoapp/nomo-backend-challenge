import { Request, Response } from 'express';
import { tasksRepository } from '@repository'

// RETO 3: Esta función tiene un bug en la consulta SQL
const getUserTasks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    
    // BUG INTRODUCIDO: Query SQL incorrecta
    const result = await tasksRepository.getUserTasks({ userId })
    
    res.json(result);
  } catch (error: any) {
    console.error('Error fetching user tasks:', error.message);
    res.status(500).json({ error: 'Failed to fetch user tasks' });
  }
};

// RETO 5: Esta función necesita filtros y paginación
const getAllTasks = async (req: Request, res: Response) => {
  try {
    const result = await tasksRepository.getAllTasks();
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status = 'pending', priority = 'medium', user_id } = req.body;
    
    const result = await tasksRepository.createTask({ title, description, status, priority, userId: user_id })
    
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// RETO 4: Implementar esta función
const updateTask = async (req: Request, res: Response) => {
  // TODO: Implementar actualización del estado de una tarea
  res.status(501).json({ error: 'Not implemented yet' });
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const taskToBeDeleted = await tasksRepository.getTaskById({ id });
    if (!taskToBeDeleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const result = await tasksRepository.deleteTask({ id });
    
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

export const tasksControllers = {
  getUserTasks,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
}