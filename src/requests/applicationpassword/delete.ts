import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteUserQueryParametersModel } from "./models";

/**
 * Delete an Application Password
 *
 * https://docs.wildduck.email/api/#operation/deleteASP
 *
 * @param userId ID of the User
 * @param asp ID of the Application Password
 */
export const deleteAppPassword = async (
	userId: string,
	aspId: string
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${aspId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
