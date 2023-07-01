import IconProps from "@/lib/types/IconProps";

export default function CodeIcon(props: IconProps) {
  return (
    <svg
      width={props.size || "24"}
      height={props.size || "25"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M7 8.5L3 12.5L7 16.5"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 8.5L21 12.5L17 16.5"
          stroke={props.color || "rgb(var(--foreground-color))"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4.5L10 20.5"
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
