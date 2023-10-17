import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * This method disables account password for IMAP/POP3/SMTP.
 *
 * https://docs.wildduck.email/api/#operation/enableCustom2FA
 *
 * @param userId the users wildduck ID
 * @param bodyData data to update on the mailbox
 */
export const enableCustom2FA = async (
	userId: string,
	bodyData: UserIdentifierModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/custom`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};
