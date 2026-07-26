"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    number: "01",
    title: "Care",
    description:
      "Clear interfaces that support patient monitoring and healthcare workflows.",
  },
  {
    number: "02",
    title: "Operations",
    description:
      "Reliable applications that simplify complex manufacturing processes.",
  },
  {
    number: "03",
    title: "Progress",
    description:
      "Engaging tools that help users track habits and build consistency.",
  },
  {
    number: "04",
    title: "Planning",
    description:
      "Thoughtful experiences that help people organize and grow their ideas.",
  },
] as const;

export function GrowthPhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="growth-philosophy"
      data-visible={isVisible}
      aria-labelledby="growth-philosophy-title"
    >
      <div className="growth-philosophy__introduction">
        <p className="growth-philosophy__eyebrow">Growth Philosophy</p>
        <h2 id="growth-philosophy-title" className="growth-philosophy__title">
          Systems designed around meaningful progress.
        </h2>
        <p className="growth-philosophy__copy">
          Whether supporting nurses, guiding plant operators, helping users
          build better habits, or making garden planning easier, I focus on
          creating systems that make progress clearer and more achievable.
        </p>
      </div>

      <ol className="growth-philosophy__values">
        {values.map((value) => (
          <li key={value.number} className="growth-philosophy__value">
            <span className="growth-philosophy__number" aria-hidden="true">
              {value.number}
            </span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
