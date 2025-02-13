import { getMatchGroup } from "../../util/regexUtil";
import { removeTrailing } from "../../util/strUtil";

type frequencyPair = [string, number];

const PERCENTAGE_UNIT = "%";

/**
 * Converts a string by its identity, not modifying it at all.
 *
 * @private
 * @param str String to use.
 * @return Same string as provided as parameter.
 */
const convertIdentity = (str: string): string => str;

/**
 * Converts a string in the format "123" to a number.
 *
 * @private
 * @param str String to use.
 * @return Number.
 */
const convertNumber = (str: string): number => Number(str);

/**
 * Converts a string in the format "123%" to a number.
 *
 * @private
 * @param str String to use.
 * @return Frequency number.
 */
const convertFrequency = (str: string): number =>
    Number(removeTrailing(str, PERCENTAGE_UNIT));

/**
 * Converts a line in the format "foo 12%" to a pair of name and frequency.
 *
 * @private
 * @param str String to use.
 * @param paddingRegex Optional regex to use for padding checking.
 * @return Frequency pair.
 */
const convertFrequencyPair = (
    str: string,
    paddingRegex: RegExp = /(\s+)\d/
): frequencyPair => {
    const padding = getMatchGroup(str, paddingRegex, 0);
    const splitStr = str.split(padding);

    return [splitStr[0].trim(), convertFrequency(splitStr[1])];
};

export {
    frequencyPair,
    convertFrequencyPair,
    convertFrequency,
    convertIdentity,
    convertNumber
};
