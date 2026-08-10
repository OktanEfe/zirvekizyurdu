"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Odalarımız", href: "/odalarimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.05.24-3.53-.74-2.98-1.18-4.86-4.2-5-4.4-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.32 2.36 1.47.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.16 1.43z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0  z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center transition-colors hover:text-brand-600">
          <div className="relative h-10 w-10 overflow-hidden">
            <Image src="/logo/zirve_logo.png" alt="Zirve Kız Yurdu" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "relative py-1 text-sm font-medium transition-colors " +
                  (isActive ? "text-brand-600 font-semibold" : "text-slate-600 hover:text-brand-600")
                }
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Secondary Button Standard: Açık Mavi Outline / Soft Background */}
          <a
            href="tel:+905382123011"
            className="inline-flex items-center gap-2 rounded-full border border-mist-200 bg-mist-50/70 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-brand-200 hover:bg-mist-100 hover:text-brand-600"
          >
            <PhoneIcon />
            <span>0538 212 30 11</span>
          </a>

          {/* Primary Button Standard: Dolu Mavi (%20 Brand-600) */}
          <a
            href="https://wa.me/905382123011"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/20 active:scale-[0.98]"
          >
            <WhatsappIcon />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-mist-50/50 p-2 text-slate-700 transition-colors hover:bg-mist-100 hover:text-brand-600 md:hidden"
          aria-expanded={isOpen}
          aria-label="Menüyü aç"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Menüyü aç</span>
          <div className="flex h-5 w-5 flex-col justify-center gap-1">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/98 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-4 pt-3 pb-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-mist-100 font-semibold text-brand-600"
                      : "text-slate-700 hover:bg-mist-50 hover:text-brand-600")
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-2.5 pt-2 border-t border-slate-100">
              <a
                href="tel:+905382123011"
                className="flex items-center justify-center gap-2 rounded-lg border border-mist-200 bg-mist-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-mist-100"
              >
                <PhoneIcon />
                <span>0538 212 30 11</span>
              </a>
              <a
                href="https://wa.me/905382123011"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                <WhatsappIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}