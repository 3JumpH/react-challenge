import { parse } from "node-html-parser";
import { decode } from "html-entities";

export const parseHTMLstring = (HTMLstring: string) => {
  // This would require additional logic if the HTML structure was nested,
  // but it works in this case because we only have a <p> tag
  const element = parse(HTMLstring);
  return decode(element.innerText);
};
