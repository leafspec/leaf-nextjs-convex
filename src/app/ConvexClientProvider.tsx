// "use client" directive: Tells Next.js this is a Client Component
// Required because Convex uses React hooks (useQuery, useMutation)
// which only work in the browser, not on the server
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react"; // Type meaning "anything React can render"

// Initialize the Convex React client with the URL of your Convex backend
// process.env.NEXT_PUBLIC_CONVEX_URL reads from .env.local
// The ! (non-null assertion) tells TypeScript "this value is definitely defined"
// Without it, TS warns that env vars could be undefined
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Provider component that wraps your app and provides Convex functionality
// This uses the "Provider pattern" - a React pattern for sharing data/functionality
// with an entire component tree without passing props through every level
//
// TypeScript syntax breakdown:
//   { children }           = destructure the children prop from props object
//   : { children: ReactNode } = type annotation (props must have children of type ReactNode)
export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // ConvexProvider makes useQuery() and useMutation() hooks available
    // to any component nested inside. Without this wrapper, those hooks fail.
    <ConvexProvider client={convex}>{children}</ConvexProvider>
  );
}