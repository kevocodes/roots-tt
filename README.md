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
```

---

## Tests

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

