# Task Management API - Prueba Técnica Backend

API RESTful para gestión de tareas desarrollada con TypeScript, Express.js, PostgreSQL y Docker.

## 🎯 Tareas a realizar

### Reto 1 - Fix del endpoint /health
Error en el acceso a req.query.details sin verificación adecuada

### Reto 2 - Implementar validación de usuarios
Requisitos:
- name (requerido, min 2 chars)
- email (requerido, formato válido)

### Reto 3 - Fix del bug en getUserTasks
Pista: Hay un problema en la SQL

### Reto 4 - Implementar endpoint PUT /api/tasks/:id completo
Pista: Necesitamos saber si la tarea existe y en caso de que exista, se ha de actualizar el estado de la misma.

### Reto 5 - Implementar filtros y paginación en getAllTasks

### Reto 6 - Implementar middleware de autenticación JWT

### Reto 7 - Propuestas de mejora

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 22+
- Docker y Docker Compose
- Git

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd nomo-backend-challenge
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servicios de base de datos**
```bash
docker-compose up -d postgres
```

4. **Poblar la base de datos**
```bash
npm run seed
```

5. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
task-management-api/
├── src/
│   ├── controllers/     # Controladores de la API
│   ├── libs/            # Definición de librerías de utilidad
│   ├── routes/          # Definición de rutas
│   ├── middleware/      # Middleware personalizado
│   ├── repository/      # Métodos de acceso a la base de datos
│   ├── server/          # Configuaración del servidor
│   └── index.ts         # Configuración principal de Express
├── database/            # Scripts de BD y migraciones
│   ├── init.sql         # Schema inicial
│   └── seed.ts          # Datos de prueba
├── docker-compose.yml   # Configuración de servicios
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con hot-reload
- `npm run build` - Compilar TypeScript
- `npm run seed` - Poblar base de datos con datos de prueba

## 🐳 Servicios Docker

### Base de Datos PostgreSQL
- **Puerto:** 5432
- **Usuario:** admin
- **Contraseña:** password
- **Base de datos:** task_management

## 📋 API Endpoints

### Autenticación
Todas las rutas de `/api/tasks` requieren autenticación JWT.

**Header requerido:**
```
Authorization: Bearer <jwt_token>
```

### Usuarios
- `GET /api/users` - Listar usuarios
- `POST /api/users` - Crear usuario

### Tareas
- `GET /api/tasks` - Listar tareas con filtros y paginación
- `POST /api/tasks` - Crear tarea
- `PUT /api/tasks/:id` - Actualizar estado de tarea
- `DELETE /api/tasks/:id` - Eliminar tarea
- `GET /api/tasks/user/:userId` - Tareas de un usuario específico

### Health Check
- `GET /health` - Estado del servidor

## 🔍 Filtros y Paginación

### Parámetros de Query Disponibles
- `status` - Filtrar por estado (pending, in_progress, completed, cancelled)
- `priority` - Filtrar por prioridad (low, medium, high, urgent)
- `user_id` - Filtrar por usuario
- `page` - Número de página (default: 1)
- `limit` - Elementos por página (default: 10, max: 100)
- `sort` - Campo de ordenación (created_at, updated_at, priority, title)

### Ejemplo de Uso
```bash
GET /api/tasks?status=pending&priority=high&page=1&limit=20&sort=created_at
```

## 🧪 Testing

### Ejecutar Tests
```bash
# Todos los tests
npm test

# Con cobertura
npm run test:coverage

# Test específico
npm test -- health.test.ts
```

### Estructura de Tests
- `tests/` - Tests unitarios por funcionalidad
- `tests/integration/` - Tests de integración completos

## 🏗️ Arquitectura

### Capas de la Aplicación
1. **Routes** - Definición de endpoints y validación inicial
2. **Controllers** - Lógica de negocio y manejo de requests
3. **Middleware** - Autenticación, validación y manejo de errores
4. **Database** - Conexión directa con PostgreSQL usando queries SQL

### Patrones Implementados
- **Repository Pattern** - Abstracción de acceso a datos
- **Middleware Pattern** - Validación y autenticación
- **Error Handling** - Manejo centralizado de errores
- **Query Builder** - Construcción dinámica de consultas SQL

## 📊 Base de Datos

### Schema Principal
```sql
-- Usuarios
users (id, name, email, created_at, updated_at)

-- Tareas
tasks (id, title, description, status, priority, user_id, created_at, updated_at)
```

### Índices para Performance
- `idx_tasks_status` - Filtrado por estado
- `idx_tasks_priority` - Filtrado por prioridad
- `idx_tasks_user_id` - Consultas por usuario
- `idx_tasks_created_at` - Ordenación temporal

## 🔒 Seguridad

### Medidas Implementadas
- **JWT Authentication** - Tokens de acceso seguros
- **Helmet.js** - Headers de seguridad HTTP
- **CORS** - Control de acceso cross-origin
- **SQL Injection Prevention** - Queries parametrizadas
- **Input Validation** - Validación de datos de entrada

## 🚀 Despliegue en Producción

### Con Docker Compose
```bash
# Construir y ejecutar en modo producción
docker-compose --profile production up -d

# Ver logs
docker-compose logs -f api
```

### Variables de Entorno de Producción
```env
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key
DB_HOST=your-production-db-host
DB_PASSWORD=your-secure-password
```

## 📈 Monitoreo y Performance

### Queries de Análisis Disponibles
- Productividad por usuario
- Distribución de tareas por estado/prioridad
- Tendencias temporales
- Análisis de performance de queries

### Métricas Clave
- Tiempo de respuesta de endpoints
- Uso de índices de base de datos
- Cobertura de tests
- Tasa de completación de tareas
