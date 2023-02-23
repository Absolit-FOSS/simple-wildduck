import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { RestoreArchivedMessageModel, RestoreArchivedMessagesModel } from "./models";

/**
 * Restore archived Message
 *
 * https://docs.wildduck.email/api/#operation/restoreMessage
 *
 * @param userId ID of the User
 * @param messageId Message ID
 */
export const restoreArchivedMessage = async (
	userId: string
): Promise<RestoreArchivedMessageModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

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
	userId: string
): Promise<RestoreArchivedMessagesModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
