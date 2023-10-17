import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { DeleteUserQueryParametersModel } from "./models";

/**
 * Delete a user
 *
 * http://docs.wildduck.email/api/#operation/deleteUser
 *
 * @param id the users wildduck ID
 * @param queryData query parameters for additional options
 */
export const deleteUser = async (
	id: string,
	queryData?: DeleteUserQueryParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		accessToken: wdData.accessToken,
		...queryData,
	});

	const res = await axiosConf.delete<DefaultResponseModel>(url);

	return res;
};
