import type { Request, Response, NextFunction } from 'express';

// RETO 2: Implementar validación para usuarios
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implementar validación
  // - name: requerido, mínimo 2 caracteres
  // - email: requerido, formato email válido
  
  next(); // Placeholder - pasar sin validar por ahora
};