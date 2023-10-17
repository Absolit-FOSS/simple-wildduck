import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	RestoreArchivedMessageBodyParametersModel,
	RestoreArchivedMessageResponseModel,
	RestoreArchivedMessagesBodyParametersModel,
} from "./models";

/**
 * Restore archived Message
 *
 * https://docs.wildduck.email/api/#operation/restoreMessage
 *
 * @param userId ID of the User
 * @param messageId Message ID
 * @param bodyData body parameters to reset user password
 */
export const restoreArchivedMessage = async (
	userId: string,
	messageId: number,
	bodyData: RestoreArchivedMessageBodyParametersModel
): Promise<AxiosResponse<RestoreArchivedMessageResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/messages/${messageId}/restore`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<RestoreArchivedMessageResponseModel>(
		url,
		bodyData
	);

	return res;
};

/**
 * Use this endpoint to cancel a timed deletion task scheduled by
 * DELETE /user/{id}. If user data is not yet deleted then the account
 * is fully recovered, except any email addresses that might have been
 * already recycled
 *
 * https://docs.wildduck.email/api/#operation/restoreMessages
 *
 * @param userId ID of the User
 */
export const restoreArchivedMessages = async (
	userId: string,
	bodyData: RestoreArchivedMessagesBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/restore`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<DefaultResponseModel>(url, bodyData);

	return res;
};
