"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  // State for the input field
  const [newMessage, setNewMessage] = useState("");

  // Query: Subscribe to messages (auto-updates when data changes!)
  const messages = useQuery(api.messages.list);

  // Mutation: Function to send a new message
  const sendMessage = useMutation(api.messages.send);

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await sendMessage({ text: newMessage });
    setNewMessage("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-8">LEAF Messages</h1>

      {/* Message form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8 w-full max-w-md">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <Button type="submit">Send</Button>
      </form>

      {/* Messages list */}
      <div className="w-full max-w-md space-y-2">
        {messages === undefined ? (
          <p>Loading...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-500">No messages yet. Send one!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="p-3 bg-gray-100 rounded">
              {msg.text}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
