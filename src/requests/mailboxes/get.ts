import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a mailbox
 *
 * https://docs.wildduck.email/api/#operation/deleteMailbox
 *
 * @param userId the users wildduck ID
 * @param mailboxId the users mailbox ID
 */
export const deleteMailbox = async (
	userId: string,
	mailboxId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${mailboxId}`,
		{
			access_token: wdData.accessToken,
		}
	);

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * Get all registered users
 *
 * http://docs.wildduck.email/api/#operation/getUsers
 *
 * @param queryData query parameters for additional options
 */
export const getUsers = async (
	queryData: GetUsersQueryParametersModel
): Promise<GetUsersResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
