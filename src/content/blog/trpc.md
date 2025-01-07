---
title: "TRPc"
description: "Somethings about Trpc"
pubDate: "Oct 23 2024"
heroImage: "/blog-placeholder-3.jpg"
---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [What is tRPC?](#what-is-trpc)
- [Key Features](#key-features)
- [Why Use tRPC?](#why-use-trpc)
- [How tRPC Works](#how-trpc-works)
- [Installing tRPC](#installing-trpc)

---

## What is tRPC?

tRPC (TypeScript Remote Procedure Call) is a framework for building **type-safe APIs** without the need for a separate client and server schema definition, like OpenAPI or GraphQL. With tRPC, the types you define on the server automatically infer the types on the client, ensuring seamless type safety and avoiding type mismatches.

---

## Key Features

- **End-to-End Type Safety**: Share types between client and server, avoiding redundant schemas.
- **Zero Boilerplate**: No need for extra code or tooling like GraphQL resolvers or Swagger definitions.
- **Flexible Transport**: Works with HTTP or WebSockets.
- **Framework Agnostic**: Can be used with any TypeScript-supported environment (e.g., Node.js, Next.js, Express).
- **Highly Performant**: Minimal overhead compared to other API solutions.

---

## Why Use tRPC?

1. **Type Safety**: Reduces runtime errors by ensuring client-server type synchronization.
2. **No Schema Duplication**: Write your API types once, and use them everywhere.
3. **Developer Productivity**: Simplifies the development process with auto-generated types.
4. **Integration**: Works well with popular frameworks like Next.js and libraries like React Query.
5. **Scalability**: Supports modular architecture for large applications.

---

## How tRPC Works

1. Define a router on the server with input and output validation.
2. Use the router's methods on the client, where the types are inferred.
3. tRPC handles the request/response communication, ensuring type safety.

---

## Installing tRPC

1. Install the core tRPC packages:
   ```bash
   npm install @trpc/server @trpc/client zod
   ```
