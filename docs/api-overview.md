# API Overview

## Base URL

- **Development**: `http://localhost:3000/api`
- **Production**: `https://api.example.com`

## Authentication

```
Authorization: Bearer <token>
```

[Description of auth mechanism]

## Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | List users |
| GET | `/users/:id` | Get user |
| POST | `/users` | Create user |
| PATCH | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### [Resource 2]

| Method | Endpoint | Description |
|--------|----------|-------------|
| ... | ... | ... |

## Request/Response Format

### Standard Response

```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "message": "Required" }
    ]
  }
}
```

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Invalid input |
| UNAUTHORIZED | 401 | Missing/invalid auth |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| INTERNAL_ERROR | 500 | Server error |

## Rate Limiting

| Tier | Limit |
|------|-------|
| Anonymous | 100/hour |
| Authenticated | 1000/hour |
| Premium | 10000/hour |

## Versioning

API version in URL: `/api/v1/...`

Breaking changes require new version.

## Pagination

Query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20, max: 100)

## Filtering

Query parameters for filtering:
- `status=active`
- `createdAfter=2024-01-01`

## API Documentation

- OpenAPI spec: `/api/docs/openapi.json`
- Swagger UI: `/api/docs`
