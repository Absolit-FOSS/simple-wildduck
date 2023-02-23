import { urlQueryBuilder } from "@netsu/js-utils";
import { UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListAuthenticationEventsModel, RequestEventInformationModel } from "./models";

/**
 * List authentication Events
 *
 * https://docs.wildduck.email/api/#operation/getAuthlog
 *
 * @param userId ID of the User
 * @param action Limit listing only to values with specific action value
 * @param filterIp Limit listing only to values with specific IP address
 * @param limit How many records to return
 * @param page Current page number. Informational only, page numbers start from 1
 * @param next Cursor value for next page, retrieved from nextCursor response value
 * @param previous Cursor value for previous page, retrieved from previousCursor response value
 */
export const listAuthenticationEvents = async (
	userId: string,
	action?: string,
	filterIp?: string,
	limit?: number,
	page?: number,
	next?: string,
	previous?: string
): Promise<ListAuthenticationEventsModel> => {
	const url = urlQueryBuilder(`/users/${userId}/authenticate`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Request Event information
 *
 * https://docs.wildduck.email/api/#operation/getAuthlogEvent
 *
 * @param userId query parameters for additional options
 * @param eventId ID of the Event
 */
export const requestEventInformation = async (
	userId: string,
	eventId: string
): Promise<RequestEventInformationModel> => {
	const url = urlQueryBuilder(`/users/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
