import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * This method disables all 2FA mechanisms a user
 * might have set up
 *
 * https://docs.wildduck.email/api/#operation/disable2FA
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disable2FA = async (
	userId: string,
	queryData: UserIdentifierModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * This method disables custom 2FA. If it was the only 2FA
 * set up, then account password for IMAP/POP3/SMTP gets
 * enabled again
 *
 * https://docs.wildduck.email/api/#operation/disableCustom2FA
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disableCustom2FA = async (
	userId: string,
	queryData: UserIdentifierModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/custom`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};

/**
 * This method disables TOTP for a user. Does not affect
 * other 2FA mechanisms a user might have set up
 *
 * https://docs.wildduck.email/api/#operation/disableTotp2FA
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disableTOTPAuth = async (
	userId: string,
	queryData: UserIdentifierModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
