import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Query: Read-only function that auto-updates when data changes                          
// This becomes api.messages.list in the frontend                                         
export const list = query({                                                               
  // ctx (context) gives us database access via ctx.db                                    
  handler: async (ctx) => {                                                               
    // Chain: start query -> sort newest first -> get all results                         
    return await ctx.db.query("messages").order("desc").collect();                        
  },                                                                                      
});                                                                                       
                                                                                          
// Mutation: Function that can write to the database                                      
// This becomes api.messages.send in the frontend                                         
export const send = mutation({                                                            
  // args: Define and validate inputs - rejects if not a string                           
  args: { text: v.string() },                                                             
  // handler gets both ctx (database) and args (validated inputs)                         
  handler: async (ctx, args) => {                                                         
    // Insert a new row into the messages table                                           
    await ctx.db.insert("messages", {                                                     
      text: args.text,                                                                    
      createdAt: Date.now(),  // Timestamp in milliseconds                                
    });                                                                                   
  },                                                                                      
});