# Persistia — Workspace

Presentaciones interactivas para el proyecto Persistia (retención universitaria con IA).

## Estructura

```
src/
  App.jsx          <- Landing page + router
  main.jsx         <- Entry point
  pages/           <- Cada presentación es un archivo JSX independiente
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Editar una presentación

1. Abrí el archivo .jsx correspondiente en src/pages/
2. Editá el contenido (es React estándar)
3. Guardá — el navegador se actualiza solo (hot reload)
4. Hacé commit y push — Netlify rebuilds automáticamente
