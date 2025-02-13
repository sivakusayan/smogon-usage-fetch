import { isFile, removeExtension } from "../../../util/strUtil";
import { parseApacheDirectoryListing } from "../../list";
import { IFormatsData, mapFormats } from "../format";

/**
 * Parses a smogon format list page.
 *
 * @private
 * @param html HTML of the format list page.
 * @returns Parsed formats.
 */
const parseFormatsPage = (html: string): IFormatsData =>
    mapFormats(
        parseApacheDirectoryListing(html)
            .filter(isFile)
            .map(removeExtension)
    );

export { parseFormatsPage };
