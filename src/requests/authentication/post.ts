import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	AuthenticateUserBodyParametersModel,
	AuthenticateUserResponseModel,
	PreAuthCheckBodyParametersModel,
	PreAuthCheckResponseModel,
} from "./models";

/**
 * Authenticate a User
 *
 * https://docs.wildduck.email/api/#operation/authenticate
 *
 * @param bodyData body parameters to reset user password
 */
export const authenticateUser = async (
	bodyData: AuthenticateUserBodyParametersModel
): Promise<AuthenticateUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * Pre-auth check
 * Check if an username exists and can be used for authentication
 *
 * https://docs.wildduck.email/api/#operation/preauth
 *
 * @param bodyData body parameters to reset user password
 */
export const preAuthenticationCheck = async (
	bodyData: PreAuthCheckBodyParametersModel
): Promise<PreAuthCheckResponseModel> => {
	const url = urlQueryBuilder(`/preauth`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
