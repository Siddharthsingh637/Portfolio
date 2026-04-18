export default function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    viewBox: '0 0 24 24',
  };

  switch (name) {
    case 'layout':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M4 5h16M4 12h10M4 19h16" />
        </svg>
      );
    case 'stack':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 10a4 4 0 100-8 4 4 0 000 8zm8 1a3 3 0 10-6 0 3 3 0 006 0z"
          />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      );
    default:
      return null;
  }
}
