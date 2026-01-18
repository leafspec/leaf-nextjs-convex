# Changelog

All notable changes to the LEAF Next.js + Convex reference implementation will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Hello World Scaffolding (SPEC-001):** Complete Next.js + Convex integration with real-time messaging
- Real-time message synchronization across browser tabs using Convex subscriptions
- Minimal UI with shadcn/ui components (Button, Input)
- Production deployment pipeline to Vercel + Convex Cloud
- TypeScript end-to-end type safety from Convex schema to frontend
- Project scaffolding with Next.js 16, Convex backend, and Tailwind CSS styling

### Technical Implementation
- Convex schema with `messages` table (text: string, createdAt: number)
- Convex functions: `list` query and `send` mutation with validation
- React hooks integration: `useQuery` for real-time data, `useMutation` for writes
- ConvexProvider wrapper for app-wide Convex context
- Automated Convex codegen in build pipeline for Vercel deployment

## [0.1.0] - 2026-01-17

### Added
- Initial project setup with create-next-app
- Convex backend integration
- shadcn/ui component library
- Three-branch Git workflow (main → develop → feature)