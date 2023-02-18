import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	CreateUserBodyParameterModel,
	CreateUserResponseModel,
	RecalculateUserQuotaResponseModel,
	ResetUserPasswordBodyParametersModel,
	ResetUserPasswordResponseModel,
} from "./models";

/**
 * Authenticate a User
 *
 * https://docs.wildduck.email/api/#operation/authenticate
 *
 * no parameters
 */
export const authenticateUser = async (
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};

/**
 * Pre-auth check
 *
 * https://docs.wildduck.email/api/#operation/preauth
 *
 * no parameters
 */
export const preAuthenticationCheck = async (): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};
