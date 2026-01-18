# Security

## Authentication

### Method
[JWT / Session / OAuth / Clerk / etc.]

### Flow
```
1. User submits credentials
2. Server validates
3. Issue token/session
4. Client stores securely
5. Include in subsequent requests
```

### Token Storage
- **Web**: HttpOnly cookies
- **Mobile**: Secure storage

## Authorization

### Role-Based Access Control (RBAC)

| Role | Permissions |
|------|-------------|
| admin | Full access |
| member | Read/write own resources |
| viewer | Read only |

### Resource-Level Permissions
[Describe per-resource authorization if applicable]

## Data Protection

### Encryption

| Data | At Rest | In Transit |
|------|---------|------------|
| Passwords | bcrypt hash | HTTPS |
| PII | AES-256 | HTTPS |
| API Keys | Encrypted | HTTPS |

### Sensitive Data Handling

- Never log sensitive data
- Mask in error messages
- Redact in API responses

## Input Validation

- Validate all user input
- Use parameterized queries
- Sanitize for XSS

## OWASP Top 10 Considerations

| Risk | Mitigation |
|------|------------|
| Injection | Parameterized queries |
| Broken Auth | Secure session management |
| XSS | Output encoding |
| CSRF | Token validation |
| Security Misconfiguration | Secure defaults |

## Secrets Management

| Secret | Storage |
|--------|---------|
| Database URL | Environment variable |
| API Keys | Environment variable |
| Encryption Keys | Secrets manager |

**Never commit secrets to git.**

## Security Headers

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
```

## Logging & Monitoring

- Log authentication events
- Monitor for anomalies
- Alert on suspicious activity

## Incident Response

1. Identify and contain
2. Assess impact
3. Notify affected parties
4. Fix and document
5. Post-mortem

## Compliance

[GDPR / HIPAA / SOC2 requirements if applicable]
