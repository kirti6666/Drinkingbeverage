/** Turns #1c3568 into "28 53 104" so Tailwind can apply opacity modifiers
 *  (text-ink/70, bg-orange/15) to a colour that is set at runtime. */
export function toChannels(hex, fallback = '0 0 0') {
  const value = String(hex || '').trim().replace('#', '');
  const full =
    value.length === 3
      ? value.split('').map((c) => c + c).join('')
      : value;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return fallback;
  const int = parseInt(full, 16);
  return `${(int >> 16) & 255} ${(int >> 8) & 255} ${int & 255}`;
}
