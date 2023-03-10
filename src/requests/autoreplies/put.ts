import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { UpdateAutoreplyBodyParametersModel } from "./models";

/**
 * Update Autoreply information
 *
 * https://docs.wildduck.email/api/#operation/updateAutoreply
 *
 * @param userId the users wildduck ID
 * @param bodyData data to update on the user
 */
export const updateAutoreplyInformation = async (
	userId: string,
	bodyData: UpdateAutoreplyBodyParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put(url, bodyData);

	return res.data;
};
