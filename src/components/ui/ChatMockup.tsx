// Chat mockup — realistic message bubbles with avatar, name, timestamp
interface Message {
  role: 'user' | 'agent'
  text: string
}

interface ChatMockupProps {
  agentName?: string
  agentInitial?: string
  label?: string
  messages: Message[]
}

export default function ChatMockup({
  agentName = 'Agent',
  agentInitial = 'A',
  label,
  messages,
}: ChatMockupProps) {
  // Generate fake but consistent timestamps
  const baseMin = 14
  return (
    <div className="chat-wrap">
      <div className="chat-header">
        <div className="chat-avatar">{agentInitial}</div>
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
            {agentName}
          </div>
          <div style={{ fontSize: '0.6875rem', color: 'var(--color-p5)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-p5)', display: 'inline-block' }} />
            Online
          </div>
        </div>
        {label && (
          <div style={{ marginLeft: 'auto', fontSize: '0.6875rem', color: 'var(--color-text-3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {label}
          </div>
        )}
      </div>
      <div className="chat-body">
        {messages.map((msg, i) => {
          const time = `${baseMin + Math.floor(i * 1.5)}:${String(i * 7 % 60).padStart(2, '0')}`
          const isUser = msg.role === 'user'
          return (
            <div key={i} className={`msg ${isUser ? 'msg-right' : ''}`}>
              {!isUser && (
                <div className="chat-avatar" style={{ width: 26, height: 26, fontSize: '0.625rem', alignSelf: 'flex-end', flexShrink: 0 }}>
                  {agentInitial}
                </div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start', gap: '0.2rem', flex: 1 }}>
                <div className={`msg-bubble ${isUser ? 'msg-bubble-user' : 'msg-bubble-agent'}`}>
                  {msg.text}
                </div>
                <span className="msg-time">{time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
