import { urlQueryBuilder } from "@netsu/js-utils";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreationResponseModel, DefaultResponseModel } from '../../models/index';
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
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId).replace("{filterId}", filterId)}`, {
		access_token: wdData.accessToken,
		...queryData
	});

	const res = await axiosConf.put(url);

	return res.data;
};
