# CLAUDE.md

## Repository Overview

**stx-dashboard** is a monorepo containing standalone monitoring dashboards built with stx (the templating/UI framework). It provides real-time dashboards for:

- **bun-queue** — Job queue monitoring (similar to Laravel Horizon)
- **httx** — HTTP client metrics and request history

## Monorepo Structure

```
stx-dashboard/
├── packages/
│   ├── bun-queue-dashboard/   # Queue monitoring dashboard
│   └── httx-dashboard/       # HTTP client metrics dashboard
```

### Packages

- **`@stacksjs/bun-queue-dashboard`** — Dashboard for monitoring bun-queue jobs, queues, throughput, and error rates. Reads metrics from Redis.
- **`@stacksjs/httx-dashboard`** — Dashboard for monitoring httx HTTP client requests, response times, and status distributions.

Both dashboards expose a `serveDashboard(options)` function that starts an stx-powered dev server rendering the dashboard UI.

## Development Commands

```bash
# Install dependencies
bun install

# Build all packages
bun run build

# Run tests
bun test

# Lint
bun run lint
bun run lint:fix

# Typecheck
bun run typecheck

# Format
bun run format
bun run format:check
```

## Key Conventions

- Package names use `@stacksjs/` scope
- Build uses `bun-plugin-dtsx` for type generation
- Tests use `bun:test`
- Lint with `pickier`
- All files use ES modules, TypeScript strict mode
- stx templates (`.stx` files) use Blade-like directives

## Architecture

Each dashboard package follows the same structure:

- `src/index.ts` — Main export with `serveDashboard()` function
- `src/types.ts` — TypeScript types for config and data
- `src/api.ts` — API endpoint handlers for fetching metrics
- `src/pages/*.stx` — Page templates using stx directives
- `src/components/*.stx` — Reusable UI components
- `test/` — Tests using `bun:test`

## Template Conventions

stx templates use Blade-like syntax:

- `{{ expression }}` — Escaped output
- `{!! expression !!}` — Raw HTML output
- `@if` / `@elseif` / `@else` / `@endif` — Conditionals
- `@foreach` / `@endforeach` — Loops
- `@component('name')` — Component inclusion
- `@include('partial')` — Partial inclusion
- `@extends('layout')` — Layout inheritance
- `@section('name')` / `@endsection` — Content sections

Variables are declared in `<script>` tags and auto-exported to the template.
