const paths = {
  drop: 'M12 3s6 6.6 6 10.6A6 6 0 0 1 6 13.6C6 9.6 12 3 12 3Z',
  shield: 'M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3Z',
  certificate: 'M12 3l2.4 1.6 2.9-.2.9 2.7 2.3 1.7-1.2 2.6 1.2 2.6-2.3 1.7-.9 2.7-2.9-.2L12 20l-2.4-1.6-2.9.2-.9-2.7L3.5 14l1.2-2.6L3.5 8.8l2.3-1.7.9-2.7 2.9.2L12 3Z',
  truck: 'M3 7h10v9H3V7Zm10 3h4l3 3v3h-7v-6ZM7 19a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 7 19Zm10 0a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 17 19Z',
  leaf: 'M20 4c0 9-5.2 13.3-11 13.3H5.6C5.6 9.6 11.2 4.6 20 4ZM4 20c1.6-3.6 4.2-6.3 7.6-8',
  lab: 'M9 3h6M10 3v6.2L4.9 18a2.2 2.2 0 0 0 1.9 3.3h10.4A2.2 2.2 0 0 0 19.1 18L14 9.2V3M7.4 15h9.2',
  bottle: 'M10 2h4v3l1.7 2.4A5 5 0 0 1 16.6 10v9.4A2.6 2.6 0 0 1 14 22h-4a2.6 2.6 0 0 1-2.6-2.6V10a5 5 0 0 1 .9-2.6L10 5V2Zm-2.6 10h9.2',
  phone: 'M6 3h3l2 5-2.2 1.4a12 12 0 0 0 5.8 5.8L16 13l5 2v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4 5.2 2 2 0 0 1 6 3Z',
  mail: 'M3 6h18v12H3V6Zm0 .8 9 6.4 9-6.4',
  pin: 'M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Zm0-8.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5.2l3.4 2',
  chat: 'M4 5h16v11H9l-5 4V5Z',
  check: 'm5 12.5 4.4 4.4L19 7.3',
  arrow: 'M5 12h13m-5.5-5.8L18.3 12l-5.8 5.8',
  building: 'M4 21V6l7-3v18M11 21V9l9 3v9M4 21h17M7.5 9v.01M7.5 13v.01M7.5 17v.01M15 15v.01M15 18v.01',
  cup: 'M5 4h14l-1.4 15.2A2 2 0 0 1 15.6 21H8.4a2 2 0 0 1-2-1.8L5 4Zm.6 6h12.8',
  calendar: 'M4 6h16v15H4V6Zm4-3v5m8-5v5M4 11h16',
  store: 'M4 9h16v12H4V9Zm-.5-.4L5.5 3h13l2 5.6a3 3 0 0 1-5.6 1.8 3 3 0 0 1-5.6 0 3 3 0 0 1-5.8-1.8Z',
};

export const iconNames = Object.keys(paths);

export default function Icon({ name = 'drop', className = 'h-5 w-5', strokeWidth = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name] || paths.drop} />
    </svg>
  );
}
