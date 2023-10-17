import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { UpdateResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateMessagesBodyParameterModel } from "./models";

/**
 * Update a message
 *
 * https://docs.wildduck.email/api/#operation/updateMessage
 *
 * @param userId the users wildduck ID
 * @param mailboxId the mailbox wildduck ID
 * @param bodyData data to update on the mailbox
 */
export const updateMessageInfo = async (
	userId: string,
	mailboxId: string,
	bodyData: UpdateMessagesBodyParameterModel
): Promise<AxiosResponse<UpdateResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId).replace("{mailboxId}", mailboxId)}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.put<UpdateResponseModel>(url, bodyData);

	return res;
};
