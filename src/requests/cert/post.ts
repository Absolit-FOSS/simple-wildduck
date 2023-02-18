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
 * Add a new TLS certificate for a server name or update existing one. You can
 * add a single certificate for each server name but SAN names are supported as
 * well. For example you can add a sertificate for "mydomain.com" that includes
 * "*.mydomain.com" in SAN and the same certificate would be used for requests
 * that do not have it's own server name registered but match the SAN value.
 * 
 * Create or update TLS certificate for server name
 *
 * http://docs.wildduck.email/api/#operation/createUser
 *
 * @param bodyData body parameters to create a user
 */
export const createOrUpdateTlsCertificateForServerName = async (
	bodyData: CreateUserBodyParameterModel
): Promise<CreateUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};