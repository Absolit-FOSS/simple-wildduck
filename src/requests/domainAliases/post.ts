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
 * Add a new Alias for a Domain.
 * This allows to accept mail on username@domain and username@alias
 * 
 * Create new Domain Alias
 *
 * https://docs.wildduck.email/api/#operation/createDomainAlias
 *
 * no parameters
 */
export const createNewDomainAlias = async (
	bodyData: CreateUserBodyParameterModel
): Promise<CreateUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};
