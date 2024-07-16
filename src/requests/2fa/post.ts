import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	EnableTOTPSeedBodyParameterModel,
	GenerateTOTPSeedBodyParameterModel,
	GenerateTOTPSeedResponseModel,
	ValidateTOTPTokenBodyParameterModel,
} from "./models";

/**
 * This method checks if a TOTP token provided by a User
 * is valid for authentication.
 *
 * https://docs.wildduck.email/api/#operation/postusersuser2fatotpcheck
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const validateTOTPToken = async (
	userId: string,
	bodyData: ValidateTOTPTokenBodyParameterModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp/check`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * This method enables TOTP for a user by verifying the
 * seed value generated from 2fa/totp/setup.
 *
 * https://docs.wildduck.email/api/#operation/postusersuser2fatotpenable
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const enableTOTPSeed = async (
	userId: string,
	bodyData: EnableTOTPSeedBodyParameterModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/totp/enable`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.post<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * This method generates TOTP seed and QR code for 2FA.
 * User needs to verify the seed value using
 * 2fa/totp/enable endpoint.
 *
 * https://docs.wildduck.email/api/#operation/postusersuser2fatotpsetup
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const generateTOTPSeed = async (
	userId: string,
	bodyData: GenerateTOTPSeedBodyParameterModel
): Promise<AxiosResponse<GenerateTOTPSeedResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp/setup`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<GenerateTOTPSeedResponseModel>(
		url,
		bodyData
	);

	return res;
};
