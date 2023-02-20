import { urlQueryBuilder } from "@netsu/js-utils";
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
 * is valid for authentication
 *
 * https://docs.wildduck.email/api/#operation/checkTotp2FA
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const validateTOTPToken = async (
	userId: string,
	bodyData: ValidateTOTPTokenBodyParameterModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp/check`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * This method enables TOTP for a user by verifying the
 * seed value generated from 2fa/totp/setup
 *
 * https://docs.wildduck.email/api/#operation/enableTotp2FA
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const enableTOTPSeed = async (
	userId: string,
	bodyData: EnableTOTPSeedBodyParameterModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/totp/enable`,
		{
			access_token: wdData.accessToken,
		}
	);

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

/**
 * This method generates TOTP seed and QR code for 2FA.
 * User needs to verify the seed value using
 * 2fa/totp/enable endpoint
 *
 * https://docs.wildduck.email/api/#operation/setupTotp2FA
 *
 * @param userId the users wildduck ID
 * @param bodyData body parameters for request
 */
export const generateTOTPSeed = async (
	userId: string,
	bodyData: GenerateTOTPSeedBodyParameterModel
): Promise<GenerateTOTPSeedResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/totp/setup`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
