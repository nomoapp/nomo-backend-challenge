import { Request, Response } from 'express';
import { usersRepository } from '@repository'

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body
    
    const result = await usersRepository.create({name, email})
    
    res.status(201).json(result)
  } catch (error: any) {
    if (error.code === '23505') { // Unique violation
      res.status(400).json({ error: 'Email already exists' })
    } else {
      res.status(500).json({ error: 'Failed to create user' })
    }
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await usersRepository.getAllUsers()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
};

export const usersControllers = {
  createUser,
  getAllUsers
}