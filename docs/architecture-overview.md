# Architecture Overview

## System Design

[High-level description of the system architecture]

## Components

### Frontend
- **Technology**: [React/Vue/Next.js/etc.]
- **State Management**: [Redux/Zustand/Context/etc.]
- **Key Directories**: `src/components/`, `src/pages/`

### Backend
- **Technology**: [Node.js/Python/Go/etc.]
- **Framework**: [Express/FastAPI/Gin/etc.]
- **Key Directories**: `src/api/`, `src/services/`

### Database
- **Type**: [PostgreSQL/MongoDB/Convex/etc.]
- **ORM/Client**: [Prisma/Drizzle/Mongoose/etc.]
- **Key Directories**: `src/db/`, `prisma/`

## Architecture Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │────▶│  Database   │
│  (Next.js)  │     │   (API)     │     │ (Postgres)  │
└─────────────┘     └─────────────┘     └─────────────┘
```

## Key Patterns

### Authentication
[Description of auth flow]

### Data Flow
[How data moves through the system]

### Error Handling
[Error handling strategy]

## External Services

| Service | Purpose | Integration |
|---------|---------|-------------|
| [Clerk] | [Auth] | [SDK] |
| [Stripe] | [Payments] | [API] |

## Environment Configuration

| Variable | Purpose | Required |
|----------|---------|----------|
| `DATABASE_URL` | Database connection | Yes |
| `API_KEY` | External API | Yes |

## Related ADRs

- ADR-001: [Decision title]
- ADR-002: [Decision title]
