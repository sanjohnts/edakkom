import type { IconName } from "~/content";

// Simple 24×24 line icons, drawn for this site.
const paths: Record<IconName, React.ReactNode> = {
  history: (
    <>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3Z" />
      <path d="M5 17a3 3 0 0 1 3-3h11" />
      <path d="M9 8h6M9 11h4" />
    </>
  ),
  photo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="16" cy="9.5" r="1.6" />
      <path d="m3 17 5.5-5.5 4 4 2.5-2.5L21 19" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0 1 13 0c0 4.9-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5" />
    </>
  ),
  lamp: (
    <>
      <path d="M12 3c1.2 1.4 1.6 2.6 0 4-1.6-1.4-1.2-2.6 0-4Z" />
      <path d="M7 9h10l-1.5 2.5h-7Z" />
      <path d="M12 11.5V18" />
      <path d="M9 18h6l1.5 3h-9Z" />
    </>
  ),
  school: (
    <>
      <path d="M3 10 12 5l9 5-9 5Z" />
      <path d="M7 12.2V16c0 1.4 2.2 3 5 3s5-1.6 5-3v-3.8" />
      <path d="M21 10v5" />
    </>
  ),
  family: (
    <>
      <circle cx="7" cy="7.5" r="2.3" />
      <circle cx="17" cy="7.5" r="2.3" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M3 19c0-3 1.8-5 4-5s3 1 3.4 2M21 19c0-3-1.8-5-4-5s-3 1-3.4 2M9.5 19c0-1.7 1.1-3 2.5-3s2.5 1.3 2.5 3" />
    </>
  ),
  paddy: (
    <>
      <path d="M12 21V9M12 13c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 10c3 0 5-2 5-5-3 0-5 2-5 5ZM12 17c-2.6 0-4.5-1.6-4.5-4 2.6 0 4.5 1.6 4.5 4ZM12 15c2.6 0 4.5-1.6 4.5-4-2.6 0-4.5 1.6-4.5 4Z" />
      <path d="M4 21h16" />
    </>
  ),
  road: (
    <>
      <path d="M9 3 4 21M15 3l5 18" />
      <path d="M12 5v2.5M12 11v2.5M12 17v3" />
    </>
  ),
  story: (
    <>
      <path d="M4 5h16v11H9l-5 4Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4M9 12h6M9 15h6M9 18h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  share: (
    <>
      <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" />
      <path d="M5 13v6h14v-6" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
