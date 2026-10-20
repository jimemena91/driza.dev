# driza.dev

Sitio institucional del ecosistema Driza (DrizaLink, DrizaTx, DrizaCamp, Dribot, DrizaPoints).
Next.js 15 + Tailwind. Es una página estática.

## Antes de publicar

1. Editá `lib/site.ts`: poné tu **email** y tu **WhatsApp** reales (formato `5491155551234`, sin `+` ni espacios).
   Los botones de contacto usan esos datos.
2. Revisá en el mismo archivo el estado de cada producto ("En producción" / "En desarrollo") y los links.

## Correrlo local

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # verifica que compile
```

## Publicarlo en driza.dev (Vercel)

1. Subí el repo a GitHub y en vercel.com elegí **Add New → Project** con `jimemena91/driza.dev`.
2. Framework: Next.js (lo detecta solo). Deploy.
3. En **Settings → Domains** agregá `driza.dev` y `www.driza.dev` y cargá en tu proveedor de dominio
   los registros DNS que Vercel te indique (A o CNAME).
4. Listo: el HTTPS se activa solo.

## Después de publicar (para promocionar)

- Google Search Console: agregá `https://driza.dev`, verificá el dominio y enviá `https://driza.dev/sitemap.xml`.
- Probá cómo se ve al compartirlo pegando el link en WhatsApp o LinkedIn
  (la imagen de vista previa está en `app/opengraph-image.png`).
- Si el link muestra la imagen vieja, borrá la caché en https://developers.facebook.com/tools/debug/

## Archivos que conviene conocer

| Archivo | Para qué |
| --- | --- |
| `lib/site.ts` | Contacto y datos de cada producto |
| `app/layout.tsx` | Título, descripción y datos para buscadores y redes |
| `public/driza-d-dorada.png` | Logo dorado de la D (el original en negro está en `driza-logo-negro.png`) |
| `app/icon.png`, `app/apple-icon.png` | Ícono de la pestaña y del celular |
| `app/opengraph-image.png` | Imagen al compartir el link |
