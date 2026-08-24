declare global {
  interface Window {
    /** Lo pone RevealWatcher para avisar al script inline que el observer arranco. */
    __revealReady?: boolean
  }
}

export {}
