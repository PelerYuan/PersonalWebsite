// src/components/ui/TerminalCard.jsx
export default function TerminalCard({ title, children, className = '' }) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-base-border font-mono text-sm ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-base-elevated border-b border-base-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-text-muted text-xs select-none">{title}</span>
      </div>
      {/* Content */}
      <div className="p-5 bg-[#080810] text-text-primary leading-relaxed">
        {children}
      </div>
    </div>
  );
}
