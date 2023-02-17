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
 * Create new Address
 *
 * https://docs.wildduck.email/api/#operation/createUserAddress
 *
 * @param userId ID of the User
 */
export const createNewAddress = async (
	userId: CreateUserBodyParameterModel
): Promise<CreateUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/{userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};

/**
 * Create new forwarded Address
 *
 * https://docs.wildduck.email/api/#operation/createForwardedAddress
 *
 * @param id the users wildduck ID
 * @param bodyData body parameters to cancel user deletion
 */
export const cancelUserDeletion = async (
	id: string,
	bodyData: UserIdentifierModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}/restore`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};

// all parameters were left unchange because there were no
// path parameters in POST