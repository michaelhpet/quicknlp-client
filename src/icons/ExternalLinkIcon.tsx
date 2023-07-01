import IconProps from "@/lib/types/IconProps";

export default function ExternalLinkIcon(props: IconProps) {
  return (
    <svg
      width={props.size || "25"}
      height={props.size || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M12.5 6H6.5C5.96957 6 5.46086 6.21071 5.08579 6.58579C4.71071 6.96086 4.5 7.46957 4.5 8V18C4.5 18.5304 4.71071 19.0391 5.08579 19.4142C5.46086 19.7893 5.96957 20 6.5 20H16.5C17.0304 20 17.5391 19.7893 17.9142 19.4142C18.2893 19.0391 18.5 18.5304 18.5 18V12"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 13L20.5 4"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 4H20.5V9"
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
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
