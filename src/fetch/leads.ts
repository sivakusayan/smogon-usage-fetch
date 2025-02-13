import fetch from "node-fetch";
import { IFormatData } from "../parse/smogon/format";
import { ILeadsData, parseLeadsPage } from "../parse/smogon/page/leads";
import { ITimeframeData } from "../parse/smogon/timeframe";
import { Extension } from "../url/Extension";
import { SubFolder } from "../url/SubFolder";
import { UrlBuilder } from "../url/UrlBuilder";
import { checkStatus } from "../util/httpUtil";

/**
 * Loads leads data for the given timeframe and format.
 *
 * @public
 * @param timeframe Timeframe to load.
 * @param format Format to load.
 * @return Leads data.
 */
const fetchLeads = async (
    timeframe: ITimeframeData,
    format: IFormatData
): Promise<ILeadsData> =>
    fetch(
        new UrlBuilder()
            .setSubFolder(SubFolder.LEADS)
            .setExtension(Extension.TEXT)
            .setTimeframe(timeframe)
            .setFormat(format)
            .build()
    )
        .then(checkStatus)
        .then(res => res.text())
        .then(parseLeadsPage);

export { fetchLeads };
