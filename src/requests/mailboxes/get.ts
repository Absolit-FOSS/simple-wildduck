import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetMailboxInfoResponseModel,
	GetUserMailboxesQueryParametersModel,
	GetUserMailboxesResponseModel,
} from "./models";

/**
 * Get the information of a mailbox
 *
 * https://docs.wildduck.email/api/#operation/getMailbox
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 */
export const getMailboxInfo = async (
	userId: string,
	mailboxId: string
): Promise<GetMailboxInfoResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${mailboxId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};

/**
 * Get a list of the users mailboxes
 *
 * https://docs.wildduck.email/api/#operation/getMailboxes
 *
 * @param userId the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const getUserMailboxes = async (
	userId: string,
	queryData?: GetUserMailboxesQueryParametersModel
): Promise<GetUserMailboxesResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.get(url);

	return res.data;
};
