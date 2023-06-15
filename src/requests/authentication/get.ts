import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { axiosConf, wdData } from "../../setup";
import {
	ListAuthenticationEventsQueryParametersModel,
	ListAuthenticationEventsResponseModel,
	RequestEventInformationResponseModel,
} from "./models";

/**
 * List authentication Events
 *
 * https://docs.wildduck.email/api/#operation/getAuthlog
 *
 * @param userId ID of the User
 * @param queryData query parameters for additional options
 */
export const listAuthenticationEvents = async (
	userId: string,
	queryData?: ListAuthenticationEventsQueryParametersModel
): Promise<AxiosResponse<ListAuthenticationEventsResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/authlog`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get<ListAuthenticationEventsResponseModel>(url);

	return res;
};

/**
 * Request Event information
 *
 * https://docs.wildduck.email/api/#operation/getAuthlogEvent
 *
 * @param userId ID of the User
 * @param eventId ID of the Event
 */
export const requestEventInformation = async (
	userId: string,
	eventId: string
): Promise<AxiosResponse<RequestEventInformationResponseModel, any>> => {
	const url = urlQueryBuilder(`/users/${userId}/authlog/${eventId}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.get<RequestEventInformationResponseModel>(url);

	return res;
};
