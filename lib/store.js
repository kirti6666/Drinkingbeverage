/**
 * Content access.
 *
 * The reference build read content from a JSON file an admin panel wrote to.
 * This build has no admin panel and no database: content lives in
 * lib/site.config.js and is compiled into the HTML at build time.
 *
 * Everything on the site reads through getConfig(), so if you ever do want a
 * CMS later, this is the only function that needs to change.
 */
import { site } from './site.config';

export function getConfig() {
  return site;
}

export default getConfig;
