import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	GetMessageInfoQueryParametersModel,
	GetMessageInfoResponseModel,
} from "./models";

/**
 * Get a message
 *
 * https://docs.wildduck.email/api/#operation/getMessage
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param messageId Message unique ID.
 * @param queryData query parameters for additional options
 */
export const getMessageInfo = async (
	userId: string,
	mailboxId: string,
	messageId: string,
	queryData: GetMessageInfoQueryParametersModel
): Promise<GetMessageInfoResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace(
			"{mailboxId}",
			mailboxId
		)}/${messageId}`,
		{
			access_token: wdData.accessToken,
			...queryData,
		}
	);

	const res = await axiosConf.get(url);

	return res.data;
};
