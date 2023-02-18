import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	LogoutUserBodyParametersModel,
	UpdateUserBodyParametersModel,
} from "./models";

/**
 * Update Filter information
 *
 * https://docs.wildduck.email/api/#operation/updateFilter
 *
 * @param userId the users wildduck ID
 * @param filterId Filters unique ID
 */
export const updateFilterInformation = async (
	userId: string,
	filterId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${filterId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.put(url);

	return res.data;
};
