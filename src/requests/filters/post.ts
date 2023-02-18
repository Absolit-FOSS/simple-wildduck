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
 * Create new Filter
 *
 * https://docs.wildduck.email/api/#operation/createFilter
 *
 * @param userId Users unique ID
 */
export const createNewFilter = async (
	userId: CreateUserBodyParameterModel
): Promise<CreateUserResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};