// RETO 6: Implementar middleware de autenticación JWT
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  // TODO: Implementar autenticación JWT
  // - Extraer token del header Authorization
  // - Verificar token con clave secreta 'TEST_SECRET_KEY'
  // - Agregar usuario al request
  
  next(); // Placeholder por ahora
};