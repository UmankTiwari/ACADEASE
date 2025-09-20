import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalSimulator = forwardRef((props, ref) => {
  const terminalRef = useRef(null);
  const term = useRef(null); // To hold the terminal instance

  useEffect(() => {
    const fitAddon = new FitAddon();
    term.current = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#FFFFFF',
        cursor: '#FFFFFF',
      },
    });

    term.current.loadAddon(fitAddon);
    term.current.open(terminalRef.current);
    fitAddon.fit();
    term.current.writeln('Welcome to the interactive terminal!');
    term.current.write('\r\n$ ');

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      fitAddon.fit();
    });
    resizeObserver.observe(terminalRef.current);

    return () => {
      resizeObserver.disconnect();
      term.current.dispose();
    };
  }, []);

  // Expose a `runCommand` method via the ref
  useImperativeHandle(ref, () => ({
    runCommand(cmd) {
      if (term.current) {
        term.current.write(`\r\n$ ${cmd}`);
        // Mocked response
        term.current.write(`\r\n> Executing '${cmd}'... Done.`);
        term.current.write('\r\n$ ');
      }
    },
  }));

  return (
    <div className="h-full min-h-[300px] bg-black rounded-lg p-2 my-4">
      <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
});

export default TerminalSimulator;