import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="fixed bottom-4 right-4 bg-[#D4AF37] text-[#0D1B2A] p-4 rounded-full shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      💬 Chat
    </button>
  );
}
