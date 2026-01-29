const LogoIcon = ({ size = 48, color = "#e53935" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle */}
    <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" />
    {/* Middle circle */}
    <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="8" />
    {/* Inner circle */}
    <circle cx="50" cy="50" r="15" fill="none" stroke={color} strokeWidth="8" />

    {/* Arrow */}
    <line x1="50" y1="50" x2="85" y2="15" stroke={color} strokeWidth="6" />
    <polygon points="85,15 78,18 82,22" fill={color} />
  </svg>
);

export default LogoIcon;
