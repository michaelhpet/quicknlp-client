/**
 * Create a `className` string for custom components
 * @param initial initial classname(s)
 * @param incoming optional classname(s) to be appended
 * @returns new classname string
 */
export default function cls(initial: string, incoming?: string) {
  const classes = [initial];
  if (incoming) classes.push(incoming);

  return classes.join(" ");
}
