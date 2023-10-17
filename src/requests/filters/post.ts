import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { CreationResponseModel } from "../../models/index";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
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
): Promise<AxiosResponse<CreationResponseModel, any>> => {
	const url = urlQueryBuilder(URL.replace("{userId}", userId), {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.post<CreationResponseModel>(url, bodyData);

	return res;
};
