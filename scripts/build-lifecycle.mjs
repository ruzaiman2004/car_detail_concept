// Vinext beta calls process.exit(0) immediately after prerendering.
// On Windows, let native Vite/Rolldown handles close naturally to avoid
// UV_HANDLE_CLOSING during shutdown. Errors retain the original exit behavior.
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  process.exit = (code) => {
    if (Number(code ?? 0) === 0) { process.exitCode = 0; return; }
    return exit(code);
  };
}
