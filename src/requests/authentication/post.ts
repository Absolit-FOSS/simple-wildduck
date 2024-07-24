import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
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
 * https://docs.wildduck.email/api/#operation/postauthenticate
 *
 * @param bodyData body parameters to reset user password
 */
export const authenticateUser = async (
	bodyData: AuthenticateUserBodyParametersModel
): Promise<AxiosResponse<AuthenticateUserResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<AuthenticateUserResponseModel>(
		url,
		bodyData
	);

	return res;
};

/**
 * Pre-auth check
 * Check if an username exists and can be used for authentication
 *
 * https://docs.wildduck.email/api/#operation/postpreauth
 *
 * @param bodyData body parameters to reset user password
 */
export const preAuthenticationCheck = async (
	bodyData: PreAuthCheckBodyParametersModel
): Promise<AxiosResponse<PreAuthCheckResponseModel, any>> => {
	const url = urlQueryBuilder(`/preauth`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<PreAuthCheckResponseModel>(url, bodyData);

	return res;
};
