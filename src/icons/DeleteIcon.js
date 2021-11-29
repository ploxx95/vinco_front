export function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#B9E1DB"
        stroke="#20AD96"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#20AD96" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#20AD96" strokeWidth="2" />
    </svg>
  );
}

export function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#20AD96"
        stroke="#B9E1DB"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#B9E1DB" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#B9E1DB" strokeWidth="2" />
    </svg>
  );
}
