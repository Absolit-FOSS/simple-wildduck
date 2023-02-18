import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteUserQueryParametersModel } from "./models";

/**
 * Delete an Alias
 *
 * http://docs.wildduck.email/api/#operation/deleteUser
 *
 * @param id the users wildduck ID
 */
export const deleteUser = async (
	id: string,
	queryData: DeleteUserQueryParametersModel
): Promise<DefaultResponseModel> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		access_token: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete(url);

	return res.data;
};
