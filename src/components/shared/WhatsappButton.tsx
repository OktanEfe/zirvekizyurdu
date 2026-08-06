function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.05.24-3.53-.74-2.98-1.18-4.86-4.2-5-4.4-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.32 2.36 1.47.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.16 1.43z" />
    </svg>
  );
}

export default function WhatsappButton() {
  return (
    <>
      <a
        href="tel:+905382123011"
        aria-label="Telefon ile Ulaşın"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        className="fixed left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 active:scale-[0.98] sm:left-6"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-red-600/30 animate-ping" />
        <PhoneIcon />
      </a>

      <a
        href="https://wa.me/905382123011"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="WhatsApp Destek Hattı"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        className="fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:bg-brand-700 active:scale-[0.98] sm:right-6"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-brand-600/30 animate-ping" />
        <WhatsappIcon />
      </a>
    </>
  );
}
