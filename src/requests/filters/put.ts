import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreationResponseModel } from '../../models/index';
import { UpdateFilterInfoBodyParametersModel } from "./models";

/**
 * Update Filter information
 *
 * https://docs.wildduck.email/api/#operation/updateFilter
 *
 * @param userId the users wildduck ID
 * @param filterId Filters unique ID
 * @param queryData query parameters for additional options
 */
export const updateFilterInformation = async (
	userId: string,
	filterId: string,
	queryData: UpdateFilterInfoBodyParametersModel
): Promise<CreationResponseModel> => {
	const url = urlQueryBuilder(`/users/${userId}/${filterId}`, {
		access_token: wdData.accessToken,
		...queryData
	});

	const res = await axiosConf.put(url);

	return res.data;
};
