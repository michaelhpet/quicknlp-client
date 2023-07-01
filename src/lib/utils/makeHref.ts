/**
 * Make a URL string to pass as href to a link element/component
 * @param str string of text to append to url
 * @param pre string to prepend to url
 * @returns new url
 */
export default function makeHref(str: string, pre?: string) {
  return (pre ?? "/") + str.toLowerCase().split(" ").join("-");
}
