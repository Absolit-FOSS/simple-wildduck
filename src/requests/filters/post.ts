import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreationResponseModel } from '../../models/index';
import { CreateNewFilterBodyParametersModel } from "./models";

/**
 * Create new Filter
 *
 * https://docs.wildduck.email/api/#operation/createFilter
 *
 * @param userId Users unique ID
 * @param bodyData body parameters to reset user password
 */
export const createNewFilter = async (
	userId: string,
	bodyData: CreateNewFilterBodyParametersModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`${URL}/filters`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url, bodyData);

	return res.data;
};