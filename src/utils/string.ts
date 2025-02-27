const EXTENSION_REGEX = /(\.[^/.\s]+)$/;

export function getExtension(file: string): string {
  return EXTENSION_REGEX.exec(file)?.[0] || "";
}

export function extensionFromUrl(url: string): string {
  const clean = url.split("?")[0].split("#")[0];
  return getExtension(clean) || "";
}

export function removeExtension(file: string): string {
  return file.replace(EXTENSION_REGEX, "");
}

/**
 * @param str - the string to strip
 * @returns the string without diacritics
 */
export const stripAccents = (str: string): string =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 *
 * @param string - input string
 */
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
