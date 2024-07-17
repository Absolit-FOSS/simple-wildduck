import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateAutoreplyBodyParametersModel } from "./models";

/**
 * Update Autoreply information
 *
 * https://docs.wildduck.email/api/#operation/putusersuserautoreply
 *
 * @param userId the users wildduck ID
 * @param bodyData data to update on the user
 */
export const updateAutoreplyInformation = async (
	userId: string,
	bodyData: UpdateAutoreplyBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};
