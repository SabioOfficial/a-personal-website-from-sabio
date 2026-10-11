import { Children, type ReactNode } from "react";
import { motion } from "motion/react";

type RevealProperties = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
};

export function Reveal({ children, className, delay = 0, from = "up" }: RevealProperties) {
  const x = from === "left" ? -32 : from === "right" ? 32 : 0;
  const y = from === "up" ? 32 : 0;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export const Stagger = ({
  children,
  className,
  step = 0.07,
  cols = 4,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  cols?: number;
}) => (
  <div className={className}>
    {Children.map(children, (kid, i) => (
      <Reveal className="h-full flex flex-col *:grow" delay={(i % cols) * step}>
        {kid}
      </Reveal>
    ))}
  </div>
);
