# Deployment

## Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | localhost:3000 | Local development |
| Staging | staging.example.com | Pre-production testing |
| Production | example.com | Live application |

## Infrastructure

### Hosting
- **Platform**: [Vercel / Railway / AWS / etc.]
- **Region**: [us-east-1 / etc.]

### Database
- **Provider**: [Neon / PlanetScale / RDS / etc.]
- **Backup**: [Daily / hourly]

### CDN
- **Provider**: [Cloudflare / Vercel Edge / etc.]

## Deployment Pipeline

```
Push to main
    ↓
CI Checks (lint, test, build)
    ↓
Build Container/Bundle
    ↓
Deploy to Staging
    ↓
Smoke Tests
    ↓
Deploy to Production
```

## CI/CD Configuration

```yaml
# GitHub Actions example
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: npm run build
      - run: deploy-command
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| DATABASE_URL | Yes | Database connection string |
| API_KEY | Yes | External API key |
| NODE_ENV | Yes | Environment (production) |

## Deployment Commands

```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:prod

# Rollback
npm run rollback
```

## Health Checks

- **Endpoint**: `/api/health`
- **Checks**: Database, external services
- **Response**: 200 OK or 503 Service Unavailable

## Monitoring

| Tool | Purpose |
|------|---------|
| [Sentry] | Error tracking |
| [Vercel Analytics] | Performance |
| [Uptime Robot] | Availability |

## Scaling

### Horizontal
- Auto-scaling based on CPU/memory
- Min: 1, Max: 10 instances

### Database
- Connection pooling
- Read replicas if needed

## Rollback Procedure

1. Identify issue
2. Trigger rollback: `npm run rollback`
3. Verify rollback successful
4. Investigate root cause
5. Fix and redeploy

## SSL/TLS

- Auto-provisioned via platform
- Enforce HTTPS redirects
- HSTS enabled
