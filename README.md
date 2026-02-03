# Catalog Interview — Next.js App Router Exercise

**Time Limit:** ~50 minutes  
**Resources allowed:** Google, Stack Overflow, AI tool of your choice

---

## Overview

This is a small Next.js App Router application that intentionally contains several issues related to:

- React Server Components (RSC)
- Client vs Server boundaries
- Server Actions
- Data caching & invalidation
- Client-side performance
- Tailwind UI polish

Your task is to identify and fix these issues.

You do **not** need to finish everything to pass,. Focus on correctness, clarity, and good architectural decisions.

---

## Important notes (please read first)

- The `/api/*` routes are **dummy APIs** implemented using in-memory state. Treat them as real production APIs.
- Persistence across server restarts is **not required**.
- **The products API intentionally returns a large dataset** to surface performance and caching issues.
- The "Add to shopping list" button currently updates local UI only — **persisting this state is part of the assignment**.
- The shopping list API uses a toggle-based POST request rather than separate add/remove endpoints.

---

## What you’re building

A simple product catalog where:

- `/` shows all products
- Users can search products
- Users can add/remove (toggle) products from a shopping list
- `/shopping-list` shows items added to the shopping list

---

## Your tasks

### 1. Fix Server / Client component boundaries

---

### 2. Persist the shopping list using Server Actions

- Replace the local-only “Add to shopping list” behavior with a **Server Action**.
- The action should persist data by calling `/api/shopping-list`.
- After adding/removing an item:
  - Refreshing the page should keep the correct state
  - The `/shopping-list` page should show updated data

You may use:

- `<form action={...}>`, or
- `useTransition()` with a server action

---

### 3. Improve performance (server + client)

- Avoid refetching products unnecessarily
- Use Next.js data caching
- Invalidate cached data when the shopping list changes
- The product list is intentionally unsorted / chaotic in the app. Improve user experience by adding client-side sorting (e.g. by name)
- Reduce unnecessary recomputation when typing in the search input

---

### 4. UI cleanup with Tailwind

Make small but meaningful improvements:

- Align product rows cleanly
- Avoid layout shift when toggling buttons
- Add a disabled / loading state while server actions are running

---

## Constraints

- Do not remove or weaken the expensive logic in `/api/products`

---

## Stretch goals (optional)

Only attempt if you have time:

- Optimistic UI for shopping list
- Sorting products (memoized)
- Simple empty or error states
- Apply the JLG style guide to components

---

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 and explore the app before making changes.
