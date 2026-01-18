# Data Model

## Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────┐
│    User      │───┬──▶│   Project    │
└──────────────┘   │   └──────────────┘
                   │          │
                   │          ▼
                   │   ┌──────────────┐
                   └──▶│    Task      │
                       └──────────────┘
```

## Core Entities

### User
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key (UUID) |
| email | string | Unique email |
| name | string | Display name |
| createdAt | datetime | Account creation |

### [Entity 2]
| Field | Type | Description |
|-------|------|-------------|
| id | string | Primary key |
| ... | ... | ... |

## Relationships

| From | To | Type | Description |
|------|-----|------|-------------|
| User | Project | 1:N | User owns projects |
| Project | Task | 1:N | Project contains tasks |

## Indexes

| Table | Columns | Purpose |
|-------|---------|---------|
| users | email | Unique constraint, login lookup |
| tasks | projectId, status | Query by project and status |

## Migrations

| Version | Description | Date |
|---------|-------------|------|
| 001 | Initial schema | YYYY-MM-DD |
| 002 | Add tasks table | YYYY-MM-DD |

## Soft Delete Strategy

[Describe soft delete approach if used]

## Audit Fields

All entities include:
- `createdAt` - Creation timestamp
- `updatedAt` - Last modification
- `deletedAt` - Soft delete marker (if applicable)
