# CLAUDE.md

Reference implementation of the LEAF Specification using Next.js and Convex.

## Overview

This is the first reference implementation of [LEAF Specification](https://github.com/leafspec/spec), an AI-native knowledge base application.

**Stack:**
- Next.js 16 (App Router)
- Convex (backend, vector search, file storage)
- OpenAI (embeddings + chat)
- Tailwind CSS

## Project Structure

```
leaf-nextjs-convex/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   └── lib/                 # Utilities
├── convex/
│   ├── schema.ts            # Database schema
│   ├── documents.ts         # Document mutations/queries
│   ├── conversations.ts     # Conversation mutations/queries
│   ├── messages.ts          # Message mutations/queries
│   ├── search.ts            # Semantic search
│   └── _generated/          # Auto-generated Convex types
└── public/
```

## LEAF Spec Compliance

This implementation must comply with:
- [API Specification](https://github.com/leafspec/spec/blob/main/specs/api-specification.md)
- [Data Models](https://github.com/leafspec/spec/blob/main/specs/data-models.md)
- [Design Principles](https://github.com/leafspec/spec/blob/main/specs/design-principles.md)
- [UI Requirements](https://github.com/leafspec/spec/blob/main/specs/ui-requirements.md)
- [Test Suite](https://github.com/leafspec/spec/blob/main/specs/test-suite.md)

## Convex-Specific Patterns

Since Convex is reactive, we use subscriptions instead of polling for:
- Document processing status
- Real-time message updates
- Search results

This aligns with the spec's "Processing Status" section which explicitly allows reactive subscriptions.

## Commands

```bash
# Development
npm run dev          # Start Next.js dev server
npx convex dev       # Start Convex dev server (run in separate terminal)

# Deployment
npx convex deploy    # Deploy Convex functions
npm run build        # Build Next.js for production
```

## Environment Variables

```bash
# .env.local
CONVEX_DEPLOYMENT=dev:your-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
OPENAI_API_KEY=sk-...
```

## Planning

- **Ideas:** `ideas/leaf-nextjs-convex/`
- **Spec:** https://github.com/leafspec/spec
