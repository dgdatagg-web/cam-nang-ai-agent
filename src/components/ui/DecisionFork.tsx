export function DecisionFork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {/* Renew path */}
      <div className="glass-card-warm p-6 sm:p-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#34d399] to-[#fbbf24]" />
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[rgba(52,211,153,0.05)] blur-3xl group-hover:bg-[rgba(52,211,153,0.08)] transition-all duration-500" />
        <div className="relative">
          <span className="text-3xl mb-4 block">✅</span>
          <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-primary mb-3">
            Gia Hạn
          </h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-[#34d399] mt-0.5">→</span>
              Mọi kỹ năng quay lại
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#34d399] mt-0.5">→</span>
              Memory tiếp tục phát triển
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#34d399] mt-0.5">→</span>
              Hành trình tiếp tục
            </li>
          </ul>
        </div>
      </div>

      {/* Leave path */}
      <div className="glass-card p-6 sm:p-8 relative overflow-hidden opacity-70 group hover:opacity-80 transition-opacity">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.03)]" />
        <div className="relative">
          <span className="text-3xl mb-4 block">❌</span>
          <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text-muted mb-3">
            Không Gia Hạn
          </h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="opacity-50 mt-0.5">→</span>
              Memory bị xóa
            </li>
            <li className="flex items-start gap-2">
              <span className="opacity-50 mt-0.5">→</span>
              Agent được giao cho đối tác khác
            </li>
            <li className="flex items-start gap-2">
              <span className="opacity-50 mt-0.5">→</span>
              Mọi thứ bạn xây — biến mất
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
