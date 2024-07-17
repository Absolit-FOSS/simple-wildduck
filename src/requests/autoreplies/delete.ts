import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {} from "./models";

/**
 * Delete Autoreply information
 *
 * https://docs.wildduck.email/api/#operation/deleteusersuserautoreply
 *
 * @param userId ID of the User
 */
export const deleteAutoreplyInfo = async (
	userId: string
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
