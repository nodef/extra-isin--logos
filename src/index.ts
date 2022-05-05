import * as P from "path";




/**
 * Get local path of a security's logo.
 * @param isin isin code
 * @returns local path
 */
export function path(isin: string): string {
  return P.join(__dirname, isin+".png");
}


/**
 * Get UNPKG URL of a security's logo.
 * @param isin isin code
 * @returns UNPKG URL
 */
export function unpkgUrl(isin: string): string {
  return `https://unpkg.com/@extra-isin/logos/data/${isin}.png`;
}


/**
 * Get jsDelivr URL of a security's logo.
 * @param isin isin code
 * @returns jsDelivr URL
 */
export function jsDelivrUrl(isin: string): string {
  return `https://cdn.jsdelivr.net/npm/@extra-isin/logos/data/${isin}.png`;
}
