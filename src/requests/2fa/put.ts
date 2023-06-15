import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * This method disables account password for IMAP/POP3/SMTP
 *
 * https://docs.wildduck.email/api/#operation/enableCustom2FA
 *
 * @param userId the users wildduck ID
 * @param bodyData data to update on the mailbox
 */
export const enableCustom2FA = async (
	userId: string,
	bodyData: UserIdentifierModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/custom`, {
		accessToken: wdData.accessToken,
	});

	const res: DefaultResponseModel = await axiosConf.put(url, bodyData);

	return res;
};
