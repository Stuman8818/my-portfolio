"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "Home", sectionId: "home", route: "/" },
  { label: "About", sectionId: "about", route: "/about" },
  { label: "Experience", sectionId: "experience", route: "/" },
  { label: "Projects", sectionId: "projects", route: "/projects" },
  { label: "Skills", sectionId: "skills", route: "/" },
  { label: "Contact", sectionId: "contact", route: "/contact" },
] as const;

type SectionId = (typeof navigationItems)[number]["sectionId"];

function getInitialSection(pathname: string): SectionId {
  const routeMatch = navigationItems.find(
    (item) => item.route !== "/" && item.route === pathname,
  );

  return routeMatch?.sectionId ?? "home";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId>(() =>
    getInitialSection(pathname),
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      setActiveSection(getInitialSection(pathname));
      return;
    }

    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className="site-navigation" onKeyDown={handleMenuKeyDown}>
      <div className="site-navigation__identity">
        <Link href="/#home" onClick={closeMenu}>
          <span className="site-navigation__name">Dave Stewart</span>
          <span className="site-navigation__role">
            Front-End Software Engineer
          </span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="site-navigation__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true">{isMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className="site-navigation__links"
        data-open={isMenuOpen}
      >
        {navigationItems.map((item, index) => {
          const isActive = activeSection === item.sectionId;
          const href =
            item.sectionId === "home" ? "/#home" : `/#${item.sectionId}`;

          return (
            <Link
              key={item.sectionId}
              ref={index === 0 ? firstLinkRef : undefined}
              href={href}
              className="site-navigation__link"
              data-active={isActive}
              aria-current={isActive ? "location" : undefined}
              onClick={() => {
                setActiveSection(item.sectionId);
                closeMenu();
              }}
            >
              <span className="site-navigation__node" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
