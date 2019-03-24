import fetch from "node-fetch";
import {
    IMetagameData,
    parseMetagamePage
} from "../parse/smogon/page/metagame";
import { Extension } from "../url/Extension";
import { SubFolder } from "../url/SubFolder";
import { UrlBuilder } from "../url/UrlBuilder";
import { checkStatus } from "../util/httpUtil";

/**
 * Loads metagame data for the given timeframe and format.
 *
 * @public
 * @param timeframe Timeframe to load.
 * @param format Format to load.
 * @param rank Optional rank to load, defaults to "0".
 * @param monotype Optional monotype to load, defaults to none.
 * @return Metagame data.
 */
const fetchMetagame = async (
    timeframe: string,
    format: string,
    rank: string = "0",
    monotype?: string
): Promise<IMetagameData> =>
    fetch(
        new UrlBuilder()
            .setSubFolder(SubFolder.METAGAME)
            .setExtension(Extension.TEXT)
            .setTimeframe(timeframe)
            .setFormat(format)
            .setRank(rank)
            .setMonotype(monotype)
            .build()
    )
        .then(checkStatus)
        .then(res => res.text())
        .then(parseMetagamePage);

export { fetchMetagame };
