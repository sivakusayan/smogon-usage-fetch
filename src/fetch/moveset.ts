import { fetchChaos } from "./chaos";

/**
 * Loads moveset data for the given timeframe and format.
 *
 * This is identical to {@link fetchChaos}, as the data they contain are the same, just in different formats.
 *
 * @public
 * @param timeframe Timeframe to load.
 * @param format Format to load.
 * @return Moveset data.
 */
const fetchMoveset = fetchChaos;

export { fetchMoveset };
