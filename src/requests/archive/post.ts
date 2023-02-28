import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { RestoreArchivedMessageBodyParametersModel, RestoreArchivedMessageResponseModel, RestoreArchivedMessagesBodyParametersModel } from "./models";
import { DefaultResponseModel } from "../../models";

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
): Promise<RestoreArchivedMessageResponseModel> => {
	const url = urlQueryBuilder(`${URL}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * Use this endpoint to cancel a timed deletion task scheduled by
 * DELETE /user/{id}. If user data is not yet deleted then the account
 * is fully recovered, except any email addresses that might have been
 * already recycled
 *
 * http://docs.wildduck.email/api/#operation/restoreUser
 *
 * @param userId ID of the User
 */
export const restoreArchivedMessages = async (
	userId: string,
	bodyData: RestoreArchivedMessagesBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}/archived/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
