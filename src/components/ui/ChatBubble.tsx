interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
}

interface ChatBubbleProps {
  messages: ChatMessage[];
}

export function ChatBubble({ messages }: ChatBubbleProps) {
  return (
    <div className="my-6 rounded-2xl bg-[#0a1020] border border-[rgba(255,255,255,0.06)] p-4 sm:p-6 max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[rgba(255,255,255,0.06)]">
        <div className="w-2 h-2 rounded-full bg-nova-gold animate-pulse" />
        <span className="text-xs font-medium text-text-muted uppercase tracking-widest font-[family-name:var(--font-heading)]">
          Trò chuyện
        </span>
      </div>
      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[rgba(255,255,255,0.08)] text-text-primary rounded-br-md'
                  : 'bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.12)] text-text-secondary rounded-bl-md'
              }`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-wider mb-1 opacity-50">
                {msg.sender === 'user' ? 'Bạn' : 'Agent'}
              </span>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
