import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * This method disables all 2FA mechanisms a user
 * might have set up
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuser2fa
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disable2FA = async (
	userId: string,
	queryData?: UserIdentifierModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};

/**
 * This method disables custom 2FA. If it was the only 2FA
 * set up, then account password for IMAP/POP3/SMTP gets
 * enabled again.
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuser2facustom
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disableCustom2FA = async (
	userId: string,
	queryData?: UserIdentifierModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/custom`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};

/**
 * This method disables TOTP for a user. Does not affect
 * other 2FA mechanisms a user might have set up.
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuser2fatotp
 *
 * @param userId Users unique ID
 * @param queryData query parameters for additional options
 */
export const disableTOTPAuth = async (
	userId: string,
	queryData?: UserIdentifierModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
