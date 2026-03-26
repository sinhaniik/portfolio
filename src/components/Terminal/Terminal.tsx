import { useState, useEffect, useRef } from 'react';

const lines = [
  { text: "whoami", delay: 400, color: "#e2e8f0", isCommand: true },
  { text: "nikhil sinha", delay: 900, color: "#a3e635", isCommand: false },
  { text: "", delay: 1100, color: "#e2e8f0", isCommand: false },
  { text: "cat skills.txt", delay: 1300, color: "#e2e8f0", isCommand: true },
  { text: "→ Languages:   JavaScript · TypeScript · Python · Bash", delay: 1800, color: "#94a3b8", isCommand: false },
  { text: "→ Frontend:    React · Next.js · Tailwind CSS", delay: 2100, color: "#94a3b8", isCommand: false },
  { text: "→ Backend:     Node.js · Express · MongoDB", delay: 2400, color: "#94a3b8", isCommand: false },
  { text: "→ Infra:       Docker · Linux · RHEL · Bash · SSH", delay: 2700, color: "#94a3b8", isCommand: false },
  { text: "→ Cloud:       AWS (learning) · VPS deployment", delay: 3000, color: "#94a3b8", isCommand: false },
  { text: "", delay: 3300, color: "#e2e8f0", isCommand: false },
  { text: "echo $STATUS", delay: 3500, color: "#e2e8f0", isCommand: true },
  { text: "open to work · based in bengaluru · targeting roles abroad", delay: 4000, color: "#a3e635", isCommand: false },
  { text: "", delay: 4300, color: "#e2e8f0", isCommand: false },
  { text: "ls projects/", delay: 4500, color: "#e2e8f0", isCommand: true },
  { text: "hmis-docker/   uw-care/   linux-lab/   portfolio/   ilri-infra/", delay: 5000, color: "#7dd3fc", isCommand: false },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [replayKey, setReplayKey] = useState<number>(0);

  const bodyRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal body to bottom as lines appear without shifting page layout
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      setVisibleLines(0);
      setCurrentText("");
      setIsTyping(false);

      const startTime = Date.now();

      for (let i = 0; i < lines.length; i++) {
        if (isCancelled) return;
        const line = lines[i];

        const elapsed = Date.now() - startTime;
        const waitTime = line.delay - elapsed;
        if (waitTime > 0) {
          await new Promise((r) => setTimeout(r, waitTime));
        }
        if (isCancelled) return;

        if (line.text.length === 0) {
          setVisibleLines(i + 1);
          continue;
        }

        setIsTyping(true);
        for (let charIndex = 1; charIndex <= line.text.length; charIndex++) {
          if (isCancelled) return;
          setCurrentText(line.text.slice(0, charIndex));
          await new Promise((r) => setTimeout(r, 35));
        }
        setIsTyping(false);
        setVisibleLines(i + 1);
        setCurrentText("");
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [replayKey]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
          color: #a3e635;
        }
        .terminal-wrapper {
          height: 440px;
          min-height: 440px;
          max-height: 440px;
        }
        @media (min-width: 1024px) {
          .terminal-wrapper {
            height: 480px;
            min-height: 480px;
            max-height: 480px;
          }
        }
        .terminal-body::-webkit-scrollbar { 
          width: 4px; 
          height: 4px;
        }
        .terminal-body::-webkit-scrollbar-track { 
          background: #0d0d0d; 
        }
        .terminal-body::-webkit-scrollbar-thumb { 
          background: #2a2a2a; 
          border-radius: 2px; 
        }
        .terminal-body::-webkit-scrollbar-thumb:hover { 
          background: #3a3a3a; 
        }
      `}} />

      <div
        className="terminal-wrapper w-full rounded-xl flex flex-col font-mono relative overflow-hidden"
        style={{
          background: '#0d0d0d',
          border: '1px solid #1f1f1f',
          color: '#e2e8f0',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 0.5px rgba(255,255,255,0.04)'
        }}
      >
        {/* Title Bar */}
        <div
          className="flex items-center shrink-0 relative"
          style={{
            background: '#1a1a1a',
            height: '32px',
            borderBottom: '1px solid #1f1f1f',
            paddingLeft: '12px',
            paddingRight: '12px'
          }}
        >
          {/* Traffic Lights */}
          <div className="flex" style={{ gap: '6px' }}>
            <div className="rounded-full" style={{ width: '10px', height: '10px', background: '#ff5f57' }}></div>
            <div className="rounded-full" style={{ width: '10px', height: '10px', background: '#febc2e' }}></div>
            <div className="rounded-full" style={{ width: '10px', height: '10px', background: '#28c840' }}></div>
          </div>

          {/* Label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span style={{ color: '#666', fontSize: '11px', letterSpacing: '0.02em' }}>nikhil — bash</span>
          </div>

          {/* Replay Button */}
          <div className="ml-auto relative z-10">
            <button
              onClick={() => setReplayKey(k => k + 1)}
              style={{ fontSize: '11px', color: '#555', background: 'none', border: 'none', cursor: 'pointer' }}
              className="hover:text-[#a3e635] transition-colors"
            >
              ↺ replay
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="terminal-body whitespace-pre text-[11.5px] lg:text-[12.5px]"
          ref={bodyRef}
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'auto',
            padding: '14px 16px',
            lineHeight: 1.8,
            fontFamily: 'monospace',
            whiteSpace: 'pre'
          }}
        >
          {lines.slice(0, visibleLines).map((line, idx) => (
            <div key={idx}>
              {line.text === "" ? (
                <div style={{ borderBottom: '0.5px solid #1a1a1a', margin: '8px 0' }} />
              ) : (
                <>
                  {line.isCommand && <span style={{ color: '#4a5568' }}>nikhil@portfolio:~$ </span>}
                  {!line.isCommand && <span className="mr-2">  </span>}
                  <span style={{ color: line.color }}>{line.text}</span>
                </>
              )}
            </div>
          ))}

          {/* Currently typing line */}
          {visibleLines < lines.length && (
            <div>
              {lines[visibleLines].text !== "" && (
                <>
                  {lines[visibleLines].isCommand && <span style={{ color: '#4a5568' }}>nikhil@portfolio:~$ </span>}
                  {!lines[visibleLines].isCommand && <span className="mr-2">  </span>}
                  <span style={{ color: lines[visibleLines].color }}>{currentText}</span>
                  {isTyping && <span className="animate-blink ml-px">▋</span>}
                </>
              )}
            </div>
          )}

          {/* End Cursor */}
          {visibleLines >= lines.length && (
            <div className="mt-1">
              <span style={{ color: '#4a5568' }}>nikhil@portfolio:~$ </span>
              <span className="animate-blink ml-1">▋</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
