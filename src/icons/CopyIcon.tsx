import IconProps from "@/lib/types/IconProps";

export default function CopyIcon(props: IconProps) {
  return (
    <svg
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H18C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V18.5C20 19.0304 19.7893 19.5391 19.4142 19.9142C19.0391 20.2893 18.5304 20.5 18 20.5H10C9.46957 20.5 8.96086 20.2893 8.58579 19.9142C8.21071 19.5391 8 19.0304 8 18.5V10.5Z"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.5V6.5C16 5.96957 15.7893 5.46086 15.4142 5.08579C15.0391 4.71071 14.5304 4.5 14 4.5H6C5.46957 4.5 4.96086 4.71071 4.58579 5.08579C4.21071 5.46086 4 5.96957 4 6.5V14.5C4 15.0304 4.21071 15.5391 4.58579 15.9142C4.96086 16.2893 5.46957 16.5 6 16.5H8"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath>
          <rect
            width={props.size || "24"}
            height={props.size || "24"}
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
