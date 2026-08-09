/** Stand-in artwork for a product that has no photo uploaded yet. The bottle
 *  fills to a different level per size, so the three cards read as a range. */
export default function BottleArt({ fill = 0.62, label = '' }) {
  const top = 96 - fill * 62;
  return (
    <svg viewBox="0 0 120 200" className="h-full w-auto" role="img" aria-label={label}>
      <defs>
        <clipPath id={`bottle-${label.replace(/\W/g, '')}`}>
          <path d="M46 34h28v8l9 13a26 26 0 0 1 4 14v101a12 12 0 0 1-12 12H45a12 12 0 0 1-12-12V69a26 26 0 0 1 4-14l9-13v-8Z" />
        </clipPath>
      </defs>
      <rect x="46" y="14" width="28" height="18" rx="4" fill="var(--navy)" />
      <path
        d="M46 34h28v8l9 13a26 26 0 0 1 4 14v101a12 12 0 0 1-12 12H45a12 12 0 0 1-12-12V69a26 26 0 0 1 4-14l9-13v-8Z"
        fill="#dbeafe"
        fillOpacity=".55"
        stroke="var(--navy)"
        strokeOpacity=".25"
        strokeWidth="1.5"
      />
      <g clipPath={`url(#bottle-${label.replace(/\W/g, '')})`}>
        <rect x="30" y={top + 60} width="60" height="140" fill="var(--navy)" fillOpacity=".14" />
        <rect x="30" y="96" width="60" height="34" fill="var(--navy)" />
        <rect x="30" y="112" width="60" height="5" fill="var(--orange)" />
        <circle cx="47" cy="104" r="4.5" fill="#fff" fillOpacity=".9" />
        <circle cx="58" cy="101" r="2.5" fill="var(--orange)" />
      </g>
    </svg>
  );
}
