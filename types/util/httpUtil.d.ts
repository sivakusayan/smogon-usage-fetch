import { Response } from "node-fetch";
/**
 * Off-brand path.join().
 *
 * @param args URL paths to join.
 * @return Joined URL.
 */
declare const urlJoin: (...args: string[]) => string;
/**
 * Simple helper to throw exceptions for non-success status codes.
 *
 * @param res Fetch Response
 * @return Fetch response.
 */
declare const checkStatus: (res: Response) => Response;
export { urlJoin, checkStatus };
