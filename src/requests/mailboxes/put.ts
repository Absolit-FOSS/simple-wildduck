import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateMailboxInfoBodyParametersModel } from "./models";

/**
 * Update a mailbox
 *
 * https://docs.wildduck.email/api/#operation/putusersusermailboxesmailbox
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param bodyData data to update on the mailbox
 */
export const updateMailboxInfo = async (
	userId: string,
	mailboxId: string,
	bodyData: UpdateMailboxInfoBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${mailboxId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};
