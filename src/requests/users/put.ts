import { urlQueryBuilder } from "@netsu/js-utils";
import { AxiosResponse } from "axios";
import { DefaultResponseModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import {
	LogoutUserBodyParametersModel,
	UpdateUserBodyParametersModel,
} from "./models";

/**
 * Update a user
 *
 * https://docs.wildduck.email/api/#operation/putusersuser
 *
 * @param id the users wildduck ID
 * @param bodyData data to update on the user
 */
export const updateUser = async (
	id: string,
	bodyData: UpdateUserBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};

/**
 * Log out all users sessions in IMAP
 *
 * https://docs.wildduck.email/api/#operation/putusersuserlogout
 *
 * @param id the users wildduck ID
 * @param bodyData data to logout on the user
 */
export const logoutUser = async (
	id: string,
	bodyData: LogoutUserBodyParametersModel
): Promise<AxiosResponse<DefaultResponseModel, any>> => {
	const url = urlQueryBuilder(`${URL}/${id}/logout`, {
		accessToken: wdData.accessToken,
	});

	const res = await axiosConf.put<DefaultResponseModel>(url, bodyData);

	return res;
};
