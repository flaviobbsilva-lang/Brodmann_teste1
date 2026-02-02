# Deploy no Vercel (Expo Router Web Static)

Este projeto já está configurado para exportar **web estático** via Expo Router (`app.config.ts` → `web.output = "static"`).

## 1) Pré‑requisitos
- Node.js 18+ (recomendado 20)
- pnpm (o projeto fixa `packageManager` em `pnpm@9.12.0`)

## 2) Rodar local (web)
```bash
pnpm install
pnpm dev:metro
```
Acesse: http://localhost:8081

## 3) Build estático
```bash
pnpm build
```
Isso gera a pasta `dist/` (export web).

## 4) Deploy no Vercel
### Via Git
1. Suba o repositório para GitHub/GitLab/Bitbucket
2. Import no Vercel
3. O `vercel.json` já configura:
   - Build: `pnpm build`
   - Output: `dist`
   - Rewrite SPA: qualquer rota → `/index.html`

### Variáveis de ambiente (opcional)
Se você for usar OAuth/API, configure no Vercel:
- `EXPO_PUBLIC_OAUTH_PORTAL_URL`
- `EXPO_PUBLIC_OAUTH_SERVER_URL`
- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_APP_ID`
- `EXPO_PUBLIC_OWNER_OPEN_ID`
- `EXPO_PUBLIC_OWNER_NAME`

> Para o mapa interativo (sem login), o site funciona mesmo sem essas variáveis.

## 5) Observações importantes
- O backend em `server/` **não é publicado** nesse deploy estático.  
  Se você quiser tRPC/DB no Vercel, o ideal é separar em **Vercel Functions** (API routes) ou um serviço externo.
