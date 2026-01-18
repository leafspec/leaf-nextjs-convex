# Testing Overview

## Testing Strategy

### Test Pyramid

```
        /\
       /  \      E2E Tests (few)
      /----\     Integration Tests (some)
     /------\    Unit Tests (many)
    /________\
```

## Test Types

### Unit Tests
- **Location**: `src/**/*.test.ts`
- **Runner**: [Jest/Vitest]
- **Coverage Target**: 80%

### Integration Tests
- **Location**: `tests/integration/`
- **Focus**: API endpoints, database operations
- **Database**: [Test database / in-memory]

### E2E Tests
- **Location**: `tests/e2e/`
- **Runner**: [Playwright/Cypress]
- **Focus**: Critical user flows

## Running Tests

```bash
# Unit tests
npm test

# With coverage
npm run test:coverage

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## CI Pipeline

```yaml
test:
  - npm run lint
  - npm run type-check
  - npm run test:coverage
  - npm run test:integration
```

## Coverage Requirements

| Metric | Target |
|--------|--------|
| Lines | 80% |
| Branches | 75% |
| Functions | 80% |

## Test Data

### Fixtures
- Location: `tests/fixtures/`
- Contains: Sample data for tests

### Factories
- Location: `tests/factories/`
- Purpose: Generate test entities

## Mocking Strategy

| What | How |
|------|-----|
| External APIs | [MSW / nock] |
| Database | [In-memory / test DB] |
| Time | [jest.useFakeTimers] |

## Flaky Test Policy

1. Mark as `skip` with issue link
2. Create BUG issue
3. Fix within 1 sprint
4. Remove skip after fix
