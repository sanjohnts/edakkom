import { levelLabels, type Lang, type Level } from "~/content";

const styles: Record<Level, string> = {
  verified: "bg-level-verified/10 text-level-verified ring-level-verified/25",
  supported: "bg-level-supported/10 text-level-supported ring-level-supported/25",
  oral: "bg-level-oral/10 text-level-oral ring-level-oral/30",
  needs: "bg-level-needs/10 text-level-needs ring-level-needs/25",
  disputed: "bg-transparent text-level-disputed ring-level-disputed/60",
};

const dots: Record<Level, string> = {
  verified: "bg-level-verified",
  supported: "bg-level-supported",
  oral: "bg-level-oral",
  needs: "bg-level-needs",
  disputed: "bg-level-disputed",
};

// A verification badge: shows how well-sourced a piece of information is.
export function Badge({
  level,
  lang,
  onDark = false,
}: {
  level: Level;
  lang: Lang;
  onDark?: boolean;
}) {
  const tone = onDark ? "bg-white/10 text-cream ring-white/20" : styles[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[level]}`} aria-hidden="true" />
      {levelLabels[lang][level]}
    </span>
  );
}
