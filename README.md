# 🫧 Bolha

**Bolha** é uma plataforma open-source para curadoria personalizada de conteúdo online - uma alternativa ao feed 💩 das grandes redes, especialmente o YouTube.

Este monorepo contém três aplicações integradas:

## 📦 Estrutura

```bash
apps/
├── site/               # Interface pública (SSR/Híbrida)
├── cms/                # Backend headless com Payload CMS
└── chrome-extension/   # Extensão para navegador
```

---

## 🧠 Visão Geral

Bolha é um agregador de conteúdo que permite aos usuários:

- Categorizar e salvar vídeos manualmente enquanto navegam
- Compartilhar "bolhas" (coleções temáticas de conteúdo)
- Receber notificações personalizadas
- Receber email diário ou semanal com novos vídeos
- Acompanhar criadores ignorados pelo algoritmo

---

## 🚀 Aplicações

### 🟣 `astro-frontend/`

Frontend construído com [Astro](https://astro.build), responsável por:

- Exibir bolhas e conteúdo categorizado
- Buscar dados do CMS via API
- Interface amigável e responsiva

### 🟢 `payload-cms/`

Backend headless usando [Payload CMS](https://payloadcms.com):

- Armazena bolhas, vídeos e usuários
- Serve uma API REST para consumo externo
- Controla autenticação e permissões

### 🟡 `chrome-extension/`

Extensão do chrome para facilitar a curadoria:

- Adiciona botão direto no YouTube para salvar conteúdo
- Envia dados para o backend com autenticação
- Permite categorizar o vídeo na hora do clique

---

## 📦 Requisitos

- Node.js + pnpm
- SQLite (ou outro DB compatível com Payload)
- Navegador Chrome ou Firefox para testar a extensão

---

## 📥 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-user/bolha-monorepo
   cd bolha-monorepo
   pnpm install
   ```

2. Inicie cada app individualmente:

   ```bash
   pnpm --filter payload-cms dev
   pnpm --filter astro-frontend dev
   ```

---

## 📌 Licença

MIT — faça bom uso, modifique e compartilhe.

---

> Projeto criado com raiva do algoritmo do YouTube.
