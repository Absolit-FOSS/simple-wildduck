import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";

/**
 * Delete an Application Password
 *
 * https://docs.wildduck.email/api/#operation/deleteASP
 *
 * @param userId ID of the User
 * @param aspId ID of the Application Password
 */
export const deleteAppPassword = async (
	userId: string,
	aspId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL.replace("{userId}", userId)}/${aspId}`, {
		accessToken: wdData.accessToken,
	});

	const res: DefaultResponseModel = await axiosConf.delete(url);

	return res;
};
