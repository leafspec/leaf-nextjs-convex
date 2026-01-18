// Schema: Defines the structure of your database tables
// Convex uses this to validate data and generate TypeScript types
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";  // v = validators (v.string(), v.number(), etc.)

export default defineSchema({
  // Table: "messages" - stores chat messages
  // Each row will have these fields:
  messages: defineTable({
    text: v.string(),      // The message content - must be a string
    createdAt: v.number(), // Timestamp in ms (Date.now()) - must be a number
  }),
  // Add more tables here as needed: users: defineTable({...}), etc.
});