# LEAF Specification

This directory contains the LEAF (Learning-Enabled AI Framework) specification that this implementation targets.

## Source

- **Repository:** https://github.com/leafspec/spec
- **Version:** 1.0.0-draft
- **Last Synced:** 2026-01-18

## Specification Documents

| Document | Purpose |
|----------|---------|
| [required-features.md](./required-features.md) | Feature requirements with implementation status |
| [api-specification.md](./api-specification.md) | REST API contract |
| [data-models.md](./data-models.md) | Entity schemas |
| [design-principles.md](./design-principles.md) | Normative guidelines |
| [provider-interfaces.md](./provider-interfaces.md) | Recommended abstractions |
| [test-suite.md](./test-suite.md) | Compliance tests |
| [ui-requirements.md](./ui-requirements.md) | Frontend requirements |

## Implementation Status

Track progress in [required-features.md](./required-features.md) using inline status markers:

- ⏳ Not started
- 🚧 In progress
- ✅ Implemented

## Syncing Updates

To sync with upstream spec changes:

```bash
cd spaces/leafspec && git pull
cp specs/*.md ../leaf-nextjs-convex/specs/
# Then manually restore status markers in required-features.md
```

## Related

- **Planning:** `ideas/leaf-nextjs-convex/` (private)
- **Spec source:** `spaces/leafspec/` (LEAF spec working copy)
