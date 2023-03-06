import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a Mailbox
 *
 * https://docs.wildduck.email/api/#operation/deleteMailbox
 *
 * @param userId Users unique ID
 * @param mailboxId Mailbox unique ID.
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
