import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { ListAuthenticationEventsQueryParametersModel,
	ListAuthenticationEventsResponseModel,
	RequestEventInformationResponseModel
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
	queryData: ListAuthenticationEventsQueryParametersModel
): Promise<ListAuthenticationEventsResponseModel> => {
	const url = urlQueryBuilder(`/users/${URL.replace("/authenticate", userId)}/authlog`, {
		access_token: wdData.accessToken,
		...queryData
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
): Promise<RequestEventInformationResponseModel> => {
	const url = urlQueryBuilder(`/users/${URL.replace("/authenticate", userId)}/authlog/${eventId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
