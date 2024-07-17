import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete a Mailbox
 *
 * https://docs.wildduck.email/api/#operation/deleteusersusermailboxesmailbox
 *
 * @param userId Users unique ID
 * @param mailboxId Mailbox unique ID.
 */
export const deleteMailbox = async (
	userId: string,
	mailboxId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${mailboxId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
