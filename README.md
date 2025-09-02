# Roots – Prueba Técnica

Se cuentan con dos funcionalidades principales:

* **Tasks**: gestor local de tareas.
* **List**: lista de usuarios desde una API remota.

---

## Requisitos

* **Node.js 22.x** (desarrollado y probado con Node 22)
* **npm**

> Sugerido con `nvm`:
>
> ```bash
> nvm use 22
> ```

---

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm run start
````

---

## Ejecutar con Docker (Producción)

**Requisitos adicionales**

* Docker Engine 24+ y Docker Compose v2

### Con Docker Compose (recomendado)

```bash
# Build + levantar en segundo plano
docker compose up -d --build

# Ver logs en tiempo real
docker compose logs -f

# Detener y limpiar contenedores/red
docker compose down
```

* App disponible en: `http://localhost:3000`
* Para reconstruir después de cambios: `docker compose up -d --build`

### Solo Docker (sin Compose)

```bash
# Construir imagen
docker build -t roots-app .

# Ejecutar contenedor
docker run -d -p 3000:3000 --name roots roots-app

# Logs
docker logs -f roots

# Parar y eliminar
docker stop roots && docker rm roots
```

---

## Testing

```bash
# Ejecutar tests una vez
npm run test

# Modo watch
npm run test:watch
```

---

## Rutas principales

* `/` → Home (botones a Tasks y List)
* `/tasks` → Gestor de tareas (crear/editar/completar/eliminar)
* `/list` → Usuarios vía fetch (endpoint mockapi)

---

## Scripts útiles

* `npm run lint` → ESLint
* `npm run dev` → Dev server (Turbopack)
* `npm run build` / `npm run start` → Producción
* `npm run test` / `npm run test:watch` → Pruebas

---
