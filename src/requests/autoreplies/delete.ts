import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {} from "./models";

/**
 * Delete Autoreply information
 *
 * https://docs.wildduck.email/api/#operation/deleteAutoreply
 *
 * @param userId ID of the User
 */
export const deleteAutoreplyInfo = async (
	userId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
