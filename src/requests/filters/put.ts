import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models/index";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateFilterInfoBodyParametersModel } from "./models";

/**
 * Update Filter information
 *
 * https://docs.wildduck.email/api/#operation/updateFilter
 *
 * @param userId the users wildduck ID
 * @param filterId Filters unique ID
 * @param bodyData query parameters for additional options
 */
export const updateFilterInformation = async (
	userId: string,
	filterId: string,
	bodyData: UpdateFilterInfoBodyParametersModel
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(
		`${URL.replace("{userId}", userId)}/${filterId}`,
		{
			accessToken: wdData.accessToken,
		}
	);

	const res = await axiosConf.put<CreationResponseModel>(url, bodyData);

	return res;
};
