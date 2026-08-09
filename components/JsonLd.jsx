/** Renders structured data. Search engines read it; visitors never see it. */
export default function JsonLd({ data }) {
  const blocks = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!blocks.length) return null;
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
